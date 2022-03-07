import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '標題不能為空'],
    default:''
  },
  content: {
    type: String,
    required: [true, '內文不能為空'],
    default:''
  },
  notice: {
    type: String,
    default:''
  },
  image: {
    type: String,
    default:''
  },
  show:{
    type:Boolean,
    default:false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('news', newsSchema)
