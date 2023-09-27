const {Yuan} = require('../models/models')

class YuanController {
    async getCourse(req, res) {
        const course = await Yuan.findAll({attributes: ['id', 'course']})
        if (course)
        return res.json(course[0])
    }
}

module.exports = new YuanController()