const router = require('express').Router()

router.get('/', async (req, res) => {
    console.log("hit health route")
    res.render("health")
})

module.exports = router