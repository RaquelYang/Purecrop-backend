import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名稱不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格不合理'],
    required: [true, '商品價格不能為空']
  },
  spec: {
    origin: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: ''
    }
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
