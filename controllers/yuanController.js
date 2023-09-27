const {Yuan} = require('../models/models')

class YuanController {
    async getCourse(req, res) {
        const course = await Yuan.findAll({attributes: ['id', 'course']})
        return res.json(course)
    }
}

module.exports = new YuanController()