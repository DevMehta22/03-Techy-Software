const {feedback} = require('../controllers/feedbackController')
const {Router} = require('express')
const router = Router()

router.post("/feedback",feedback)

module.exports = router