import mongoose from 'mongoose'

const imsgesSchema = new mongoose.Schema({
  productswiper: {
    type: [
      {
        file:{
          type:String
        }
      }
    ]
  },
  newsswiper: {
    type: [
      {
        file:{
          type:String
        }
      }
    ]
  }
}, { versionKey: false })

export default mongoose.model('images', imsgesSchema)
