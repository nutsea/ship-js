const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()

router.get('/', orderController.getOrder)
router.post('/', orderController.copyOrders)

module.exports = router