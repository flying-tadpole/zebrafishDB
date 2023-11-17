const router = require("express").Router()

const healthRoute = require('./health.js')

router.use('/health', healthRoute)

module.exports = router;