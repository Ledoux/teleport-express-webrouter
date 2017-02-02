const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)
app.use(express.static(path.join(__dirname, '')))

const {
 PORT,
 SITE_NAME
} = process.env
app.set('port', (PORT || 5000))

app.get('/', function (req, res) {
  const indexFileName = process.env.TYPE === 'localhost'
  ? '_dev_index.html'
  : '_prod_index.html'
  res.render(path.join(__dirname, `templates/${indexFileName}`), {
    templateUrls: ['https://github.com/snipsco/teleport-express-webrouter','https://github.com/snipsco/teleport-webpack-react','https://github.com/snipsco/teleport-flask-websocket','https://github.com/snipsco/teleport-heroku'],
    SITE_NAME
  })
})

module.exports.app = app
