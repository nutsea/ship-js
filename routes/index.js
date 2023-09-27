const Router = require('express')
const router = new Router()
const yuanRouter = require('./yuanRouter')
const orderRouter = require('./orderRouter')

router.use('/yuan', yuanRouter)
router.use('/order', orderRouter)

module.exports = router