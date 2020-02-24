const childProc = require('child_process')

function testIndex () {
  try {
    childProc.execSync('node index')
  } catch {
    console.log('Error')
    return false
  }
  return true
}

console.log(testIndex())
