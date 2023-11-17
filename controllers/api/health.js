const router = require('express').Router()

router.get('/health', async (req, res) => {
    console.log("hit health route")
    res.render("testing health route!")
})

module.exports = router