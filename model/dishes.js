const mongoose = require('mongoose')
const baseModel=require('./base-model')
const Schema = mongoose.Schema
const dishesSchema = new mongoose.Schema({
   ...baseModel,
   title: {//标题
      type: String,
      required: true
   },
   price: {//价格
      type: Number,
      required: true
   },
   img: {//图片
      type: String,
      required: true
   },
   discription: {//描述
      type: String,
      default: null
   },
   tagList:{
      type:[String],
      default: null
   },
   sales:{//销量
      type:Number,
      default:0
   },
   author:{
      type:Schema.Types.ObjectId,
      ref:'User',
      required:true
   }

})

module.exports = dishesSchema