const childProc = require('child_process')

const command = process.env.INPUT_COMMAND || ''

childProc.exec(`./node_modules/.bin/sls ${command}`, (err, stdout, stderr) => {
    console.log(process.cwd())
    console.log(stdout)
    if (err !== null) {
      console.log(stderr)
      throw
    }
  })
