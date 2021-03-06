import news from '../models/news.js'

export const createNews = async (req, res) => {
  try {
    const result = await news.create({ ...req.body, image: req.file.path })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getAllNews = async (req, res) => {
  try {
    const result = await news.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
export const getNewsById = async (req, res) => {
  try {
    const result = await news.findById(req.params.id)
    if (result) {
      res.status(200).send({ success: true, message: '', result })
    } else {
      res.status(400).send({ success: false, message: '找不到商品' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
export const updateNewsById = async (req, res) => {
  const data = {
    name: req.body.name,
    show: req.body.show,
    content: req.body.content,
    notice: req.body.notice,
  }
  if (req.file) {
    data.image = req.file.path
  }
  try {
    const result = await news.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到' })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
export const updateNews = async (req, res) => {
  try {
    const result = await news.findByIdAndUpdate(req.body.id, {show: req.body.show}, { new: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
export const deleteNews = async (req, res) => {
  try {
    const result = await news.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, message: '',result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
export const getNews = async(req,res) =>{
  try {
    const result = await news.find({ show: true })
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
