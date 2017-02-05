const express = require('express')

const app = express()

require('./lib/set').setWithApp(app)
require('./lib/render').renderWithApp(app)
require('./lib/routes').routesWithApp(app)

module.exports.app = app
