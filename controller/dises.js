const { Dish, User } = require('../model')
//获取菜品列表
exports.getList = async (req, res, next) => {
   try {
      const { limit = 20, offset = 0, tag, author } = req.query
      const filter = {}
      if (tag) {
         filter.tagList = tag
      }
      if (author) {
         const user = await User.findOne({ username: author })
         filter.author = user ? user._id : null
      }
      const dishes = await Dish.find(filter)
         .skip(Number.parseInt(offset))
         .limit(Number.parseInt(limit))
         .sort({
            //-1倒序 1升序
            createdAt: -1
         })
      const count = await Dish.countDocuments()
      res.status(200).json({
         dishes,
         count
      })
   } catch (err) {
      next(err)
   }
}
//新建菜品
exports.new = async (req, res, next) => {
   try {
      const dish = new Dish(req.body.dish)
      dish.author = req.user._id
      dish.populate("author")
      await dish.save()

      res.status(201).json({
         dish
      })
   } catch (err) {
      next(err)
   }
}
//获取菜品详情
exports.detail = async (req, res, next) => {
   try {
      const dish = await Dish.findById(req.params.dishId).populate("author")
      if (!dish) {
         return res.status(404).end()
      }
      res.status(200).json({
         dish
      })
   } catch (err) {
      next(err)
   }
}
//菜单编辑
exports.edit = async (req, res, next) => {
   try {
      const dish = req.dish
      const bodyDish = req.body.dish
      dish.title = bodyDish.title || dish.title;
      dish.description = bodyDish.description || dish.description
      dish.price = bodyDish.price || dish.price
      await dish.save()
      res.status(201).json({ dish })
   } catch (err) {
      next(err)
   }
}
//删除菜品
exports.delete = async (req, res, next) => {
   try {
     const dish=req.dish
     await dish.remove()
     res.status(204).end()
   } catch (err) {
      next(err)
   }
}