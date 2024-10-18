const Router = require('express')
const router = new Router
const userRouter = require('./userRouter')
const measurementsRouter = require('./measurementsRouter')
const activityLogsRouter = require('./activityLogsRouter')
const notificationsRouter = require('./notificationsRouter')
const devicesRouter = require('./devicesRouter')
const goalsRouter = require('./goalsRouter')

router.use('/user', userRouter)
router.use('/measurements', measurementsRouter)
router.use('/activityLogs', activityLogsRouter)
router.use('/notifications', notificationsRouter)
router.use('/devices', devicesRouter)
router.use('/goals', goalsRouter)

module.exports = router