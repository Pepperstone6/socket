let express = require('express')
let router = express.Router()
import * as route from './route'
router.get('/', function(req, res){
  
})
router.post('/login', route.login)
router.post('/register', route.register)
router.post('/verityInfo', route.verityInfo)
export default router