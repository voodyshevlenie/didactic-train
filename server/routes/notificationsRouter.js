const Router = require('express')
const notificationsController = require('../controllers/notificationsController')
const router = new Router


router.post('/readbln', notificationsController.readbln)
router.get('/',)

module.exports = router