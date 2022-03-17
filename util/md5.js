const crypto = require('crypto')

// console.log(crypto.getHashes())

// const ret=crypto.createHash('md5')
// .update('hello')
// .digest('hex')
//转十进制
// console.log(ret)
module.exports = str => {
   return crypto.createHash('md5')
      .update('chen' + str)
      .digest('hex')
}