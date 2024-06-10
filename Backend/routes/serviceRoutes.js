const {addService,deleteService,services} = require('../controllers/serviceController')
const {Router} = require('express')
const router = Router()

router.post("/add",addService)
router.delete("/delete/:id",deleteService)
router.get("/",services)

module.exports = router