const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

const router2 = express.Router();
router2.get('/api/dishes/list', (req, res) => {
   res.header['']
   res.json({
      count: 4,
      dishes: [{_id: 12}],
   })
})
const app = express()
// app.all("*", (req, res, next)=> {
//    res.header("Access-Control-Allow-Origin", "*")
//    next()
// })
app.use(morgan('dev'))

app.use(express.json())//解析请求体

app.use(cors())//为客户端提供跨域请求

const PORT = process.env.PORT || 3000
//读取环境变量的端口号 没有则取默认3000

app.use('/api', router)
// app.use(router2);

app.use(errorHandler())
app.listen(PORT, () => {
   console.log(`server is running at http://localhost:${PORT}`)
})
