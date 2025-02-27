require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const https = require('https')
const fs = require('fs')

const PORT = process.env.PORT || 5000

// for linux

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/server.kicksie.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/server.kicksie.ru/cert.pem')
}

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/bot', router)

// for linux

const server = https.createServer(options, app)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        // app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
        // for linux

        server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()