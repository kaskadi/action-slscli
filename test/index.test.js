/* eslint-env mocha */
const childProc = require('child_process')
const chai = require('chai')
chai.should()

describe('action-sls-cli', () => {
  it('should execute simple --version call', () => {
    process.env.INPUT_COMMAND = '--version'
    executeIndex.should.not.throw()
  })
  describe('processes valid files', () => {
    it('should process command', () => {

    })
    it('should not throw when enabling error catching', () => {

    })
  })
  describe('processes valid files', () => {
    it('should process command when not enabling error catching', () => {

    })
    it('should throw when enabling error catching', () => {
      // process.env.INPUT_COMMAND = 'deploy --noDeploy --config test/invalid-sls/serverless.yml'
      // process.env.INPUT_SHOULD_THROW = true
      // executeIndex.should.throw()
    })
  })
  it('should process command when given a working directory', () => {

  })
})

function executeIndex () {
  try {
    childProc.exec('node index.js')
  } catch (err) {
    console.log('Error')
    throw err
  }
}
