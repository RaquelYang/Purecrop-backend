import mongoose from 'mongoose'
import validator from 'validator'

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products',
          required: [true, '缺少商品 ID ']
        },
        quantity: {
          type: Number,
          required: [true, '缺少商品數量 ']
        }
      }
    ]
  },
  orderinfo:{
    ordername:{
      type: String,
      default: ''
    },
    ordermessage:{
      type: String,
      default: ''
    },
    orderaddress:{
      type: String,
      default: ''
    },
    orderphone:{
      type: Number,
      default:0,
      validator: {
        validator(phone) {
          if (phone.length === 0) return true
          return validator.isMobilePhone(phone, 'zh-TW')
        }
      }
    },
    orderpay: {
      type: String,
      enum: {
        values: [ '信用卡/金融卡','貨到付款']
      }
    },  
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('orders', orderSchema)
