/* eslint-env mocha */
const runAction = require('../helpers/run-action.js')
const chai = require('chai')
chai.should()

describe('main step', function () {
  this.timeout(30000)
  before(async () => {
    await runAction(['pre'])
  })
  it('should execute simple --version call', test({ command: '--version' }, true))
  it('should process command when given a working directory', test({ command: 'deploy --noDeploy', working_directory: 'test/test-wd-sls' }, true))
  describe('processes valid files', () => {
    it('should process command', test({ command: 'deploy --noDeploy', working_directory: 'test/valid-sls', should_throw: 'false' }, true))
    it('should not throw when enabling error catching', test({ command: 'deploy --noDeploy', working_directory: 'test/valid-sls', should_throw: 'true' }, true))
  })
  describe('processes invalid files', () => {
    it('should process command when not enabling error catching', test({ command: 'deploy --noDeploy', working_directory: 'test/invalid-sls', should_throw: 'false' }, true))
    it('should throw when enabling error catching', test({ command: 'deploy --noDeploy', working_directory: 'test/invalid-sls', should_throw: 'true' }, false))
  })
})

function test (inputs, result) {
  return async () => {
    for (const input in inputs) {
      process.env[`INPUT_${input.toUpperCase()}`] = inputs[input]
    }
    const testResult = await runAction(['main']).then(() => true).catch(() => false)
    testResult.should.equal(result)
  }
}
