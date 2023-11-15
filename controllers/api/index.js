const router = require("express").Router()
const healthRoute = require('./health')

router.use('/health', healthRoute)

module.exports = router;