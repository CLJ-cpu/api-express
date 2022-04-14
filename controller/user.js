const { User } = require("../model");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");
//用户登录
exports.login = async (req, res, next) => {
  try {
    // 1.数据验证
    // 2.生成token
    let user = req.user.toJSON();
    const token = await jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: 60 * 60 * 12,
    });
    // 3.发送成功响应
    delete user.password;
    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    next(err);
  }
};
//用户注册
exports.register = async (req, res, next) => {
  try {
    //1.获取请求体数据
    //2.数据验证
    //2.1基本数据验证
    //2.2业务数据验证
    //3.验证通过，将数据保存到数据库中
    let user = new User(req.body.user);

    await user.save();
    user = user.toJSON();
    delete user.password;
    res.status(201).json({
      user,
    });
    //4.返回成功响应
    res.send("register");
  } catch (err) {
    next(err);
  }
};
//获取当前用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    const query = req.query;
    const condition = {};
    if (query.phone) {
      condition.phone = query.phone;
    }
    console.log(condition);
    const user = await User.findOne(condition);
    res.status(200).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

//更新用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send("put /users");
  } catch (err) {
    next(err);
  }
};
