const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)
//生成jwt jwt.sign
//验证jwt jwt.verify
//解析jwt不验证 jwt.decode