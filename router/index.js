const express = require('express')
const router = express.Router()

//用户登录
router.use(require('./user'))
//商家资料
router.use('/profiles', require('./profile'))
//店铺菜单
router.use(require('./dishes'))
//店铺信息
router.use(require('./store'))


module.exports = router