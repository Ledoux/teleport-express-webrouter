if [[ ! $(heroku apps:info -a $[backend.dashSiteName]) ]]; then
  git init
  heroku create --app $[backend.dashSiteName] --buildpack heroku/nodejs --remote $[type.name]
  heroku config:set --app $[backend.dashSiteName] TYPE=$[type.name]
else
  if [[ ! -d ".git" ]]; then
    heroku git:remote --app $[backend.dashSiteName] --remote $[type.name]
  else
    echo ".git has been already initiated"
  fi
  echo "$[backend.dashSiteName] has been already created"
  echo "Do you wish to delete this app (y/n)?"
  read answer
  if echo "$answer" | grep -iq "^y" ;then
    git init
    heroku apps:destroy $[backend.dashSiteName] --confirm $[backend.dashSiteName];
    heroku create --app $[backend.dashSiteName] --buildpack heroku/nodejs --remote $[type.name];
    heroku config:set --app $[backend.dashSiteName] TYPE=$[type.name];
  else
    echo No
  fi
fi
