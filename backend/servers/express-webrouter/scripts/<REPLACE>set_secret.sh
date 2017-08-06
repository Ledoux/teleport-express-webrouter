awk '{print \"heroku config:set --app $TYPE-$[backend.siteName] \"$0\";\"}' scripts/\"$TYPE\"_secret.sh | xargs -0 bash -c
