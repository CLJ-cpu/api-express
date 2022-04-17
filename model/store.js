const mongoose = require("mongoose");
const baseModel = require("./base-model");
const storeSchema = new mongoose.Schema({
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
  iscomplete: {
    type: Boolean,
    default: false,
  },
  applyInfo: {
    //注册时的信息
    step: { type: Number, default: 0 }, //外层step
    contacts: { type: String }, //联系人
    phone: { type: String }, //联系电话
    mainType: { type: Number }, //经营品类 0快餐简餐 1小吃 2 中式菜肴 3全球美食 4火锅
    auxType: { type: Number }, //辅营品类
    outPhoto: { type: String }, //门面图
    name: { type: String }, //门店名称
    inPhoto: { type: String }, //店内环境
    infoComplete: { type: Boolean, default: false }, //店铺信息完整

    area: { type: Number }, //店铺位置 0和香 1和畅
    areaDetail: { type: String }, //具体位置
    license: { type: String }, //营业执照
    qualComplete:{ type: Boolean, default: false }, //资质信息完整
  },
});

module.exports = storeSchema;
