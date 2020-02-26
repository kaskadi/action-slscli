/* eslint-env mocha */
const childProc = require('child_process')
const chai = require('chai')
chai.should()

describe('action-slscli', function () {
  this.timeout(4000)
  it('should execute simple --version call', async () => {
    const test = await execMain({ command: '--version' })
    test.should.equal(true)
  })
  it('should process command when given a working directory', async () => {
    const test = await execMain({ command: 'deploy --noDeploy', wd: 'test/test-wd-sls' })
    test.should.equal(true)
  })
  describe('processes valid files', () => {
    it('should process command', async () => {
      const test = await execMain({ command: 'deploy --noDeploy', wd: 'test/valid-sls', shouldThrow: 'false' })
      test.should.equal(true)
    })
    it('should not throw when enabling error catching', async () => {
      const test = await execMain({ command: 'deploy --noDeploy', wd: 'test/valid-sls', shouldThrow: 'true' })
      test.should.equal(true)
    })
  })
  describe('processes valid files', () => {
    it('should process command when not enabling error catching', async () => {
      const test = await execMain({ command: 'deploy --noDeploy', wd: 'test/invalid-sls', shouldThrow: 'false' })
      test.should.equal(true)
    })
    it('should throw when enabling error catching', async () => {
      const test = await execMain({ command: 'deploy --noDeploy', wd: 'test/invalid-sls', shouldThrow: 'true' })
      test.should.equal(false)
    })
  })
})

function execMain (opts) {
  return new Promise((resolve, reject) => {
    process.env.INPUT_COMMAND = opts.command
    if (opts.wd) {
      process.env.INPUT_WORKING_DIRECTORY = opts.wd
    } else {
      delete process.env.INPUT_WORKING_DIRECTORY
    }
    if (opts.shouldThrow) {
      process.env.INPUT_SHOULD_THROW = opts.shouldThrow
    } else {
      delete process.env.INPUT_SHOULD_THROW
    }
    childProc.exec('node index', (err, stdout, stderr) => {
      if (err === null) {
        console.log(stdout)
        resolve(true)
      } else {
        console.log(stderr)
        resolve(false)
      }
    })
  })
}
