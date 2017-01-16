# teleport-express-webrouter
This is a template from the app https://github.com/snipsco/teleport, that helps you to
build a nodejs express server that is automatically deployed on a certain docker/kubernetes
config.

You can test yourself with
```
tpt -c --project my-app --templates teleport-express-webrouter,teleport-snips
```
and then follow these instructions https://github.com/snipsco/teleport/blob/master/README.md#start-a-new-project

See for instance how this was used to deploy our slack bot https://github.com/snipsco/snips-sdk-ds/tree/master/tools/slack-sdk
