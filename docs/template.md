[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-slscli/build?label=build&logo=mocha)](https://github.com/kaskadi/action-slscli/actions?query=workflow%3Abuild)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-slscli?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-slscli?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/action-slscli?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-slscli)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/action-slscli?label=code%20quality&logo=lgtm)](https://lgtm.com/projects/g/kaskadi/action-slscli/?mode=list)

***

{{>main}}
**Attention:** this action does not include error handling to avoid blocking a workflow because of a non blocking error thrown by _Serverless_. For example _Invalid stage identifier_ errors which occur when deploying an API without resources but does not prevent the API from effectively being created.

You are therefore responsible for ensuring that your _Serverless_ configuration files are exempt of error (_hint_: you can use `sls deploy --noDeploy` command locally to see any error that may occur)