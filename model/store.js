const mongoose = require("mongoose");
const baseModel = require("./base-model");
const userSchema = new mongoose.Schema({
  ...baseModel,
  name: {
    //店铺名称
    type: String,
  },
  status: {
    //店铺状态
    type: Number,
    required: true,
    default: 0, //关门0 营业1
  },
  openTime: {
    //开始营业时间
    type: String,
    // required: true,
  },
  closeTime: {
    //结束营业时间,
    type: Date,
  },
  avatar: {
    //店铺头像
    type: String,
  },
  description: {
    //店铺描述
    type: String,
  },
  license: {
    //店铺执照
    type: String,
  },
  iscomplete:{
     type: Boolean,
     default: false,
  }
});

module.exports = userSchema;
