[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/build?label=build&logo=mocha)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Abuild)
[![Static code analysis status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/analyze-code?label=codeQL&logo=github)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Aanalyze-code)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-slscli?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-slscli?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/action-slscli?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)

***

# What is this action for?

This action allows you to use the _Serverless CLI_ inside of GitHub Actions.

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```yaml
name: {YOUR-ACTION-NAME}
on: [{YOUR-ACTION-EVENT}]
jobs:
  {YOUR-JOB-NAME}:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: {YOUR-STEP-NAME}
      uses: kaskadi/action-slscli@master
      with:
        command: {COMMAND-VALUE}
        working_directory: {WORKING_DIRECTORY-VALUE}
        should_throw: {SHOULD_THROW-VALUE}
      env:
        AWS_ACCESS_KEY_ID: {AWS_ACCESS_KEY_ID-VALUE}
        AWS_SECRET_ACCESS_KEY: {AWS_SECRET_ACCESS_KEY-VALUE}
```

**Note:** everything contained in single curly brackets (`{ }`) needs to be replaced by your desired values

**Inputs:**
|        Input        | Required |   Default   | Description                                                                                   |
| :-----------------: | :------: | :---------: | :-------------------------------------------------------------------------------------------- |
|      `command`      |  `false` | `--version` | Command to be run by Serverless                                                               |
| `working_directory` |  `false` |             | Directory in which Serverless should run                                                      |
|    `should_throw`   |  `false` |             | Define whether the action process should throw an error on `Serverless` error (exit code `1`) |

**Environment variables:**
|         Variable        | Required | Description                                                                                                                                                                                                  |
| :---------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `AWS_ACCESS_KEY_ID`   |  `true`  | ID of a programmatic access AWS key attached to an IAM role which has required permissions to work with the `Serverless` configuration you defined. **Recommend implementing into repository secrets!**      |
| `AWS_SECRET_ACCESS_KEY` |  `true`  | Secret of a programmatic access AWS key attached to an IAM role which has required permissions to work with the `Serverless` configuration you defined.  **Recommend implementing into repository secrets!** |

**Attention:** this action does not include error handling to avoid blocking a workflow because of a non blocking error thrown by _Serverless_. For example _Invalid stage identifier_ errors which occur when deploying an API without resources but does not prevent the API from effectively being created.

You are therefore responsible for ensuring that your _Serverless_ configuration files are exempt of error (_hint_: you can use `sls deploy --noDeploy` command locally to see any error that may occur).