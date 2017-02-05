import fs from 'fs'
import path from 'path'

const {
 PORT,
} = process.env

export function setWithApp(app) {

  app.set('port', (PORT || 5000))

  const teleportDir = path.join(__dirname, '../../config/teleport.json')
  if (fs.existsSync(teleportDir)) {
    const teleport = JSON.parse(fs.readFileSync(teleportDir))
    app.set('teleport', teleport)
  }
}
