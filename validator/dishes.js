const validate = require('../middleware/validator')
const { body, param } = require('express-validator');
const mongoose = require('mongoose');
const { Dish } = require('../model')
exports.creatDish = validate([
   body('dish.title').notEmpty().withMessage('菜名不能为空'),
   body('dish.price').notEmpty().withMessage('菜品价格不能为空'),
   body('dish.img').notEmpty().withMessage('菜品图片不能为空')
])

exports.getDish = validate([
   param('dishId').custom(
      //    value => {
      //    if (!mongoose.isValidObjectId(value)) {
      //       throw new Error('菜品id类型错误')//同步失败
      //    }
      //    return true//同步成功
      // })
      async value => {
         if (!mongoose.isValidObjectId(value)) {
            return Promise.reject('菜品id类型错误')//异步失败
         }
         // return true//异步成功
      })
])

exports.updateDish = [
   validate([
      validate.isValidationId(['params'], 'dishId')]),
   async (req, res, next) => {
      const dishId = req.params.dishId
      const dish = await Dish.findById(dishId)
      req.dish = dish
      if (!dish) {
         return res.status(404).end()
      }
      next()
   }
]
exports.deleteDish = exports.updateDish
//菜品是否存在