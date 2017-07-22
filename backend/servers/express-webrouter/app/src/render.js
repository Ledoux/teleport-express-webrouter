import express from 'express'
import ejs from 'ejs'
import fs from 'fs'
import path from 'path'

import { IS_DEV } from './config'

const packageConfig = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../package.json'))
    .toString('utf-8')
)
const { SITE_NAME } = process.env
let TELEPORT_WELCOME = {}
const teleportDir = path.join(__dirname, '../../config/teleport_welcome.json')
if (fs.existsSync(teleportDir)) {
  TELEPORT_WELCOME = JSON.parse(fs.readFileSync(teleportDir))
}
const TELEPORT_WELCOME_STRING = `'${JSON.stringify(TELEPORT_WELCOME)}'`

export function useRender(app, config = {}) {
  // unpack
  const extraContext = config.extraContext || {}
  // set render
  app.set('view engine', 'html')
  app.engine('html', ejs.renderFile)
  app.use(express.static(path.join(__dirname, '../')))
  // use
  app.use('/', (req, res) => {
    // choose the correct html entry point
    let indexFileName
    let indexFileDir
    if (IS_DEV) {
      indexFileName = '_dev_index.html'
    } else {
      const pageName = (req.originalUrl === '/'
      ? '/home'
      : req.originalUrl)
      // remove also the first slash
      indexFileName = `_${pageName.slice(1)}_index.html`
      console.log('indexFileName', indexFileName)
      if (!fs.existsSync(path.join(__dirname, `../templates/${indexFileName}`))) {
        indexFileName = '_prod_index.html'
      }
    }
    indexFileDir = path.join(__dirname, `../templates/${indexFileName}`)
    // update the context
    app.set('context', Object.assign(app.get('context') || {}, {
      SITE_NAME,
      TELEPORT_WELCOME,
      TELEPORT_WELCOME_STRING
    }, extraContext))
    // render
    console.log('indexFileDir', indexFileDir)
    res.render(indexFileDir, app.get('context'))
  })
}
