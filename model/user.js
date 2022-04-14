const mongoose = require("mongoose");
const baseModel = require("./base-model");
const md5 = require("../util/md5");
const random=require('random-string');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    //用户名
    type: String,
    required:true, 
    default:'user'+random(8)
  },
  email: {
    //邮箱
    type: String,
    // required: true,
  },
  phone: {
    //手机号
    type: String,
    required: true,
  },
  password: {
    //密码
    type: String,
    required: true,
    set: (value) => md5(value),
    //查询时不带此字段
    select: false,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  hasStore:{
    type: Boolean,
    default: false,
  },
  store:
    { type: ObjectId, ref: 'store' },
});

module.exports = userSchema;
