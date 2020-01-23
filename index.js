const childProc = require('child_process')

const command = process.env.INPUT_COMMAND || ''

childProc.exec(`./node_modules/.bin/sls ${command}`, (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    if (err !== null) {
      throw err
    }
  })
