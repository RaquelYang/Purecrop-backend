import images from '../models/images.js'

export const uploadProductCarousel = async (req, res) => {
  try {
    // const result = await images.create(
    //   { productswiper: {file:req.file.path} }
    //   )
    const result = await images.findByIdAndUpdate('6211af30444aa392e2d79087',
      {$push:{ productswiper:{file: req.file.path} }}
      )
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ sucess: false, message: error.errors[key].name })
    } else {
      res.status(500).send({ sucess: false, message: '伺服器錯誤' })
    }
  }
}
export const getImages = async (req, res) => {
  try {
    const result = await images.find()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ sucess: false, message: '伺服器錯誤' })
  }
  
}
export const deletePorductImage = async (req, res) => {
  try {
    const result = await images.findByIdAndUpdate('6211af30444aa392e2d79087',{$pull:{productswiper:{_id:req.params.id}}})
    console.log(result);
    res.status(200).send({ success: true, message: '',result })
  } catch (error) {
    console.log(error);
    res.status(500).send({ sucess: false, message: '伺服器錯誤' })
  }
}

export const uploadNewsCarousel = async(req,res)=>{
  try {
    const result = await images.findByIdAndUpdate('6211af30444aa392e2d79087',
      {$push:{ newsswiper:{file: req.file.path} }}
      )
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ sucess: false, message: error.errors[key].name })
    } else {
      res.status(500).send({ sucess: false, message: '伺服器錯誤' })
    }
  }
}
export const deleteNewsImage = async(req,res)=>{
  try {
    const result = await images.findByIdAndUpdate('6211af30444aa392e2d79087',{$pull:{newsswiper:{_id:req.params.id}}})
    res.status(200).send({ success: true, message: '',result })
  } catch (error) {
    console.log(error);
    res.status(500).send({ sucess: false, message: '伺服器錯誤' })
  }
}
