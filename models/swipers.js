import mongoose from 'mongoose'

const swipesSchema = new mongoose.Schema({
  productimage: {
    type: [String]
  },
  productswiper: {
    type: [String]
  },
  newsswiper: {
    type: [String]
  }
}, { versionKey: false })

export default mongoose.model('swipers', swipesSchema)
