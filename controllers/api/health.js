const router = require('express').Router()

router.get('/health', async (req, res) => {
    res.render('health', health)
})

module.exports = router