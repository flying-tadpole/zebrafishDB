const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('census')
})

router.get('/lookup', async (req, res) => {
    res.render('lookup')
})

module.exports = router;