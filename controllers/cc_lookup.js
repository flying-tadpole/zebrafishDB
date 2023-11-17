const router = require("express").Router()

router.get("/lookup", async (req, res) => {
    console.log("hit lookup route")
})

module.exports = router;