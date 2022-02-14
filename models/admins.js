import mongoose from 'mongoose'
import md5 from 'md5'

const adminSchema = new mongoose.Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [16, '帳號必須 16 個字以下'],
    unique: true,
    required: [true, '帳號不能為空']
  },
  password: {
    type: String,
    required: [true, '密碼不能為空']
  },
  tokens: {
    type: [String]
  }
}, { versionKey: false })

adminSchema.pre('save', function (next) {
  const admin = this
  if (admin.isModified('password')) {
    if (admin.password.length >= 4 && admin.password.length <= 16) {
      admin.password = md5(admin.password)
    } else {
      const error = new mongoose.Error.ValidationError(null)
      error.addError('password', new mongoose.Error.ValidationError({ message: '密碼長度錯誤' }))
      next(error)
      return
    }
  }
  next()
})

adminSchema.pre('findOneAndUpdate', function (next) {
  const admin = this._update
  if (admin.password) {
    if (admin.password.length >= 4 && admin.password.length <= 16) {
      admin.password = md5(admin.password)
    } else {
      const error = new mongoose.Error.ValidationError(null)
      error.addError('password', new mongoose.Error.ValidationError({ message: '密碼長度錯誤' }))
      next(error)
      return
    }
  }
  next()
})

export default mongoose.model('admins', adminSchema)
