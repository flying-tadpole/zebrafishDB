const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('body')
})

module.exports = router