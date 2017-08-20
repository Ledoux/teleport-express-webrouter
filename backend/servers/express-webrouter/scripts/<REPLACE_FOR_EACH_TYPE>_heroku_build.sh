if [[ ! $(heroku apps:info -a $[run.subDomain]) ]]; then
  git init
  heroku create --app $[run.subDomain] --buildpack heroku/nodejs --remote $[type.name]
  heroku config:set --app $[run.subDomain] SERVER=$[server.name]
  heroku config:set --app $[run.subDomain] SITE_NAME=$[backend.siteName]
  heroku config:set --app $[run.subDomain] TAG=$[server.tag]
  heroku config:set --app $[run.subDomain] TYPE=$[type.name]
  heroku config:set --app $[run.subDomain] URL=$[run.url]
  if [[ ! -d "./scripts/$[type.name]_secret.sh" ]]; then
    export TYPE=$[type.name] && sh scripts/set_secret.sh
  fi
else
  if [[ ! -d ".git" ]]; then
    git init
    heroku git:remote --app $[run.subDomain] --remote $[type.name]
  else
    echo ".git has been already initiated"
    if [[ "$(git remote | grep $[type.name])" == "$[type.name]" ]]; then
      echo "remote has been already set"
    else
      heroku git:remote --app $[run.subDomain] --remote $[type.name]
    fi
  fi
  echo "$[run.subDomain] has been already created"
fi
