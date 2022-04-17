const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default')

//连接数据库
mongoose.connect(dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const db = mongoose.connection
//当连接失败
db.on('error', err => {
   console.log('数据库连接失败', err)
})
//当连接成功
db.once('open', function () {
   console.log('数据库连接成功')
})

//组织导出模型类
module.exports = {
   User: mongoose.model('User', require('./user')),
   Dish: mongoose.model('Dish', require('./dishes')),
   Store:mongoose.model('Store',require('./store')),
}
