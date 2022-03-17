const express = require("express")
const dishes = require("../controller/dises")
const auth = require("../middleware/auth")
const dishValidator = require("../validator/dishes")
const router = express.Router()
//菜品列表
router.get('/dishes/list', dishes.getList)
//新增菜品
router.post('/dishes', auth, dishValidator.creatDish, dishes.new)
//菜品详情
router.get('/dish/:dishId', dishValidator.getDish, dishes.detail)
//菜品编辑
router.put('/dish/:dishId', auth, dishValidator.updateDish, dishes.edit)
//菜品删除
router.delete('/dish/:dishId', auth, dishValidator.deleteDish, dishes.delete)

module.exports = router