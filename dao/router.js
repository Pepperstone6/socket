let express = require('express')
let router = express.Router()
import * as route from './route'
router.get('/', function(req, res){
  
})
router.post('/login', route.login)
router.post('/register', route.register)
router.post('/verityInfo', route.verityInfo)
//查找添加的好友
router.get('/addFriend', route.addFriend)
//请求添加好友
router.post('/requestAdd',route.requestAdd)
//
router.get('/getRequestFriend', route.getRequestFriend)
export default router