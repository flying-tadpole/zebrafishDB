const router = require("express").Router();

const lookupRoutes = require('./cc_lookup.js')
const main = require('./main.js')
const apiRoutes = require('./api/')

router.use("/", main)
router.use("/lookup", lookupRoutes)
router.use("/api", apiRoutes)

module.exports = router; 