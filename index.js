const childProc = require('child_process')
// test if we're in a GitHub Actions context so we can still test locally how the action is behaving

const root = process.env.GITHUB_ACTIONS ? '/home/runner/work/_actions/kaskadi/action-slscli/master/' : './'
const pathToBin = `${root}node_modules/serverless/bin/serverless.js`

const command = process.env.INPUT_COMMAND || ''
const wd = process.env.INPUT_WORKING_DIRECTORY

if (wd) {
  process.chdir(wd)
}

childProc.exec(`${pathToBin} ${command}`, (err, stdout, stderr) => {
  console.log(stdout)
  if (err !== null) {
    console.log(stderr)
  }
})
