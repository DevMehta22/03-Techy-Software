const {feedback} = require('../controllers/feedbackController')
const {Router} = require('express')
const router = Router()

router.post("/",feedback)

module.exports = router