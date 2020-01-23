const childProc = require('child_process')

const command = process.env.INPUT_COMMAND || ''

childProc.exec(`./node_modules/.bin/sls ${command}`, (error, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    if (error !== null) {
      console.log(`exec error: ${error}`)
    }
  })
