const {Order} = require('../models/models')

class OrderController {
    async getOrder(req, res) {
        const {track} = req.body
        const order = await Order.findOne({where: {track: track}, attributes: ['id', 'track', 'status']})
        return res.json(order)
    }
}

module.exports = new OrderController()