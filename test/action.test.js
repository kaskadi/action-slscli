/* eslint-env mocha */
const runAction = require('./helpers/run-action.js')
const steps = ['pre', 'main']
const chai = require('chai')
chai.should()

describe('action-slscli', function () {
  // ******* DO NOT REMOVE THIS TEST!
  require('./pre/tests.js')
  // *******
  this.timeout(10000)
  it('should execute simple --version call', async () => {
    const test = runAction(steps, { command: '--version' })
    test.should.equal(true)
  })
  it('should process command when given a working directory', async () => {
    const test = runAction(steps, { command: 'deploy --noDeploy', wd: 'test/test-wd-sls' })
    test.should.equal(true)
  })
  describe('processes valid files', () => {
    it('should process command', async () => {
      const test = runAction(steps, { command: 'deploy --noDeploy', wd: 'test/valid-sls', shouldThrow: 'false' })
      test.should.equal(true)
    })
    it('should not throw when enabling error catching', async () => {
      const test = runAction(steps, { command: 'deploy --noDeploy', wd: 'test/valid-sls', shouldThrow: 'true' })
      test.should.equal(true)
    })
  })
  describe('processes valid files', () => {
    it('should process command when not enabling error catching', async () => {
      const test = runAction(steps, { command: 'deploy --noDeploy', wd: 'test/invalid-sls', shouldThrow: 'false' })
      test.should.equal(true)
    })
    it('should throw when enabling error catching', async () => {
      const test = runAction(steps, { command: 'deploy --noDeploy', wd: 'test/invalid-sls', shouldThrow: 'true' })
      test.should.equal(false)
    })
  })
})
