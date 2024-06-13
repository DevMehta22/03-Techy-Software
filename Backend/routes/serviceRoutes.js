const {addService,deleteService,services} = require('../controllers/serviceController')
const {upload} = require('../upload')
const {Router} = require('express')
const router = Router()

router.post("/add",upload.single('image'),addService)
router.delete("/delete/:id",deleteService)
router.get("/",services)

module.exports = router