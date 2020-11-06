[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/build?label=build&logo=mocha)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Abuild)
[![Static code analysis status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/analyze-code?label=codeQL&logo=github)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Aanalyze-code)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-slscli?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-slscli?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/action-slscli?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)

***

{{>main}}
**Attention:** this action does not include error handling to avoid blocking a workflow because of a non blocking error thrown by _Serverless_. For example _Invalid stage identifier_ errors which occur when deploying an API without resources but does not prevent the API from effectively being created.

You are therefore responsible for ensuring that your _Serverless_ configuration files are exempt of error (_hint_: you can use `sls deploy --noDeploy` command locally to see any error that may occur).