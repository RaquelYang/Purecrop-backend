import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '標題不能為空']
  },
  description: {
    type: String,
    required: [true, '內文不能為空']
  },
  notice: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('news', newsSchema)
