const { spawnSync } = require('child_process')

module.exports = (steps, opts) => {
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
  let tests = []
  for (const step of steps) {
    tests = [...tests, runStep(step)]
  }
  return tests[1]
}

function runStep (step) {
  try {
    console.log(`INFO: running action ${step} step...`)
    console.log(`\n************ ${step.toUpperCase()} STEP OUTPUT START ************\n`)
    const exec = spawnSync('node', [`src/${step}`])
    const stdout = exec.stdout.toString()
    const stderr = exec.stderr.toString()
    console.log(stdout)
    console.log(`\n************ ${step.toUpperCase()} STEP ACTION OUTPUT END ************\n`)
    return stderr.length === 0
  } catch (err) {
    console.log(`ERROR: an error occured in ${step} step...`)
    console.log(err)
    return false
  }
}
