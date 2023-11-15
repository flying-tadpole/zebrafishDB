const router = require("express").Router();

const main = require('./main')
const apiRoutes = require('./api/')

router.use("/", main)
router.use("/api/", apiRoutes)

module.exports = router;