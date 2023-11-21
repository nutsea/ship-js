const { Order } = require('../models/models')

class OrderController {
    async getOrder(req, res) {
        const { track } = req.query
        if (track) {
            const order = await Order.findOne({ where: { track }, attributes: ['id', 'track', 'status'] })
            return res.json(order)
        } else {
            return res.json(null)
        }
    }

    async copyOrders(req, res) {
        const { orders } = req.body
        try {
            for (let i of orders) {
                await Order.create({ track: i.track, status: i.status })
            }
            return res.json(orders)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }
    }
}

module.exports = new OrderController()