awk '{print "heroku config:set --app $TYPE-reval2 "$0";"}' scripts/"$TYPE"_secret.sh | xargs -0 bash -c
