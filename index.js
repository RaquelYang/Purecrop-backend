import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routes/users.js'
import adminsRouter from './routes/admins.js'
import productsRouter from './routes/products.js'
import ordersRouter from './routes/orders.js'

mongoose.connect(process.env.DB_URL, () => {
  console.log('MongoDB conntected')
})

const app = express()

app.use(
  cors({
    origin (origin, callback) {
      if (origin === undefined || origin.includes('github') || origin.includes('localhost')) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed'), false)
      }
    }
  })
)
// cors 錯誤
app.use((_, req, res, next) => {
  res.status(403).send({ success: false, message: '請求被拒絕' })
})

app.use(express.json())

// express.json() 錯誤
app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '資料格式錯誤' })
})

app.use('/users', usersRouter)
app.use('/admins', adminsRouter)
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)

// 所有錯誤
app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: '未知錯誤' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Started')
})
