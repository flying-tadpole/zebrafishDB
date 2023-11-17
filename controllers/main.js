const router = require('express').Router()

router.get('/', async (req, res) => {
    res.render('census')
})

// router.get('/health', async (req, res) => {
//     res.render('health')
// }) 

module.exports = router;