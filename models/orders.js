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
    name:{
      type: String,
      default: '',
      required: [true, '缺少購買人名稱']
    },
    message:{
      type: String,
      default: ''
    },
    address:{
      type: String,
      default: '',
      required: [true, '缺少購買人地址']
    },
    phone:{
      type: Number,
      default:0,
      required: [true, '缺少購買人電話'],
      validator: {
        validator(phone) {
          if (phone.length === 0) return true
          return validator.isMobilePhone(phone, 'zh-TW')
        }
      }
    },
    state: {
      type: String,
      enum: {
        values: ['待發貨', '待收貨', '已出貨', '已結單']
      },
      default:'待發貨'
    },
    pay:{
      type: String,
      required: [true, '缺少付款方式'],
      enum: {
        values: [ '信用卡/金融卡','貨到付款']
      }
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('orders', orderSchema)
