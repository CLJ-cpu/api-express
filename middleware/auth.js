const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const {User}=require('../model')

module.exports = async (req, res, next) => {
   //从请求头获取token
   let token = req.headers['authorization']
   
   token = token ? token.split('Bearer ')[1] : null
   if (!token) {
      return res.status(401).end()
   }
      
   try {
      const decodedToken = await verify(token, jwtSecret)
      
      req.user=await User.findOne({_id:decodedToken.userId})
      next()
   } catch (err) {
      return res.status(401).end()
   }

   //无效-》响应401
   //有效-》把用户信息读取出来挂载到req请求对象生
   // 继续往后执行
}