![](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/update?label=updated)

# What is this action for?

It allows you to use the _Serverless CLI_ inside of GitHub Actions.

**Attention:** this action does not include error handling to avoid blocking a workflow because of a non blocking error thrown by _Serverless_. For example _Invalid stage identifier_ errors which occur when deploying an API without resources but does not prevent the API from effectively being created.

You are therefore responsible for ensuring that your _Serverless_ configuration files are exempt of error (_hint_: you can use `sls deploy --noDeploy` command locally to see any error that may occur)

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```
name: YOUR-ACTION-NAME
on: [YOUR-ACTION-EVENT]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: [YOUR-STEP-NAME]
      uses: kaskadi/action-slscli@master
      with:
        command: 'whatever command you wanna run!'
        working_directory: 'the directory you want to execute the serverless cli in'
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_KEY_SECRET }}
```

Before trying to trigger your new workflow, please set both `AWS_KEY_ID` and `AWS_KEY_SECRET` in the secrets of your repository.
Those are the credentials of an IAM user which can deploy the necessary resources (can have Admin policy if need be, but can also have only limited rights to only be able to deploy API + related resources)

With those environment variables set, _Serverless_ can now deploy to AWS using this IAM user.
