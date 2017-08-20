if [ -x "$(command -v yarn)" ]; then
  yarn install
fi
git add .
git commit -m "push to heroku"
git push $[type.name] master -f
