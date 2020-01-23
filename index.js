const childProc = require('child_process')
const pathToBin = process.cwd().includes('/home/runner/work') ? '/home/runner/work/_actions/kaskadi/action-slscli/master/node_modules/.bin/sls' : './node_modules/.bin/sls'

const command = process.env.INPUT_COMMAND || ''

childProc.exec(`${pathToBin} ${command}`, (err, stdout, stderr) => {
  console.log(stdout)
  if (err !== null) {
    console.log(stderr)
    throw err
  }
})
