const { spawn } = require('child_process')
const path = require('path')
const { getInput, group } = require('@actions/core')

async function main () {
  const pathToBin = path.join(__dirname, '..', 'node_modules/serverless/bin/serverless.js')
  const command = getInput('command')
  const wd = getInput('working_directory')
  let throwControl = getInput('should_throw')
  throwControl = throwControl.length > 0 ? JSON.parse(throwControl) : false

  if (wd.length > 0) {
    console.log(`INFO: changing working directory to ${wd}...`)
    process.chdir(wd)
    console.log('SUCCESS: successfully changed working directory!')
  }

  await group(`Executing command ${command} in Serverless CLI`, async () => {
    return new Promise((resolve, reject) => {
      const proc = spawn(pathToBin, command.split(' '))
      proc.stdout.on('data', log)
      proc.stderr.on('data', log)
      proc.on('error', console.log)
      proc.on('exit', code => {
        if (code !== 0 && throwControl) {
          reject(new Error(code))
        }
        resolve(code)
      })
    })
  })
}

function log (data) {
  console.log(data.toString().trim())
}

main().catch(() => {
  process.exit(1)
})
