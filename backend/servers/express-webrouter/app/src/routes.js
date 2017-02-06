const path = require('path')

const {
 SITE_NAME,
} = process.env

const indexFileName = process.env.TYPE === 'localhost'
? '_dev_index.html'
: '_prod_index.html'
const indexFileDir = path.join(__dirname, `../templates/${indexFileName}`)

export function routesWithApp(app) {

  // we try to get the teleport object that
  // gives the global config of the whole app
  // and we feed the context of the render with that
  const TELEPORT_WELCOME = app.get('TELEPORT_WELCOME') || {}
  const context = {
    SITE_NAME,
    TELEPORT_WELCOME
  }

  // home route
  app.get('/', function (req, res) {
    res.render(indexFileDir, context)
  })
}
