const { spawn } = require('child_process')
const path = require('path')
const core = require('@actions/core')

async function main () {
  const pathToBin = path.join(__dirname, '..', 'node_modules/serverless/bin/serverless.js')
  const command = core.getInput('command')
  const wd = core.getInput('working_directory')

  if (wd.length > 0) {
    process.chdir(wd)
  }

  let throwControl = core.getInput('should_throw')
  throwControl = throwControl.length > 0 ? JSON.parse(throwControl) : false

  await new Promise((resolve, reject) => {
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
}

function log (data) {
  console.log(data.toString().trim())
}

main().catch(() => {
  process.exit(1)
})
