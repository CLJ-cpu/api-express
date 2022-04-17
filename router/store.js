const express = require("express")

const router = express.Router()
const storeCtrl = require("../controller/store")
// const userValidator = require("../validator/user")
const auth = require("../middleware/auth")
//新建店铺
router.post('/store',auth,  storeCtrl.createStore)

//获取电店铺信息
router.get('/store', storeCtrl.getStore)

//更新店铺信息
router.put('/store', auth, storeCtrl.updateStore)

module.exports = router
