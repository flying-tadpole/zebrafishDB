const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('census')
})

module.exports = router;