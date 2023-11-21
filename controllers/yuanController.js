const { Yuan } = require('../models/models')

class YuanController {
    async getCourse(req, res) {
        const course = await Yuan.findAll({ attributes: ['id', 'course'] })
        if (course)
            return res.json(course[0])
    }

    async setYuanOnce(req, res) {
        const { yuan } = req.body
        const newYuan = await Yuan.create({ course: yuan })
        return res.json(newYuan)
    }
}

module.exports = new YuanController()