//新建店铺（用户注册时）
const { Store } = require("../model");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
//新建店铺
exports.createStore = async (req, res, next) => {
  try {
    const store = Store.create();
    res.status(200).json({
      success: true,
      store,
    });
  } catch (err) {
    next(err);
  }
};

//获取店铺信息
exports.getStore = async (req, res, next) => {
  try {
    const query = req.query;
    const condition = { _id: query._id };
    console.log(req)
    const store = await Store.findOne(condition);
    res.status(200).json({
      store,
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

//更新店铺信息
exports.updateStore = async (req, res, next) => {
  try {
    //  const query=req.query;
    //  res.send("put /users");
  } catch (err) {
    next(err);
  }
};
