const express = require('express')
const ejs = require('ejs')
const path = require('path')

export function renderWithApp(app) {
  app.set('view engine', 'html')
  app.engine('html', ejs.renderFile)
  app.use(express.static(path.join(__dirname, '../')))
}
