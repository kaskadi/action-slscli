![](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/update?label=dependencies%20updated&logo=npm)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-slscli?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-slscli?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
<!-- [![](https://img.shields.io/codeclimate/coverage/kaskadi/action-slscli?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli) -->

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/action-slscli?label=code%20quality&logo=lgtm)](https://lgtm.com/projects/g/kaskadi/action-slscli/?mode=list)

***

# What is this action for?

It allows you to use the _Serverless CLI_ inside of GitHub Actions.

**Attention:** this action does not include error handling to avoid blocking a workflow because of a non blocking error thrown by _Serverless_. For example _Invalid stage identifier_ errors which occur when deploying an API without resources but does not prevent the API from effectively being created.

You are therefore responsible for ensuring that your _Serverless_ configuration files are exempt of error (_hint_: you can use `sls deploy --noDeploy` command locally to see any error that may occur)

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```
name: {YOUR-ACTION-NAME}
on: [{YOUR-ACTION-EVENT}]
jobs:
  serverless:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: [{YOUR-STEP-NAME}]
      uses: kaskadi/action-slscli@master
      with:
        command: {'whatever command you wanna run!'}
        working_directory: {'the directory you want to execute the serverless cli in'}
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_KEY_SECRET }}
```

Before trying to trigger your new workflow, please set both `AWS_KEY_ID` and `AWS_KEY_SECRET` in the secrets of your repository.
Those are the credentials of an IAM user which can deploy the necessary resources (can have Admin policy if need be, but can also have only limited rights to only be able to deploy API + related resources)

With those environment variables set, _Serverless_ can now deploy to AWS using this IAM user.

**Note:** everything contained in single curly brackets (`{ }`) needs to be replaced by your desired values
