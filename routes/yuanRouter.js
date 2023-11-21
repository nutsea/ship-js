const Router = require('express')
const router = new Router()
const yuanController = require('./../controllers/yuanController')

router.get('/', yuanController.getCourse)
router.post('/one', yuanController.setYuanOnce)

module.exports = router