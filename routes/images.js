import express from 'express'
import content from '../middleware/content.js'
import authadmin from '../middleware/authadmin.js'
import upload from '../middleware/upload.js'
import {
  uploadProductCarousel,
  getImages,
  deletePorductImage,
  uploadNewsCarousel,
  deleteNewsImage
} from '../controllers/images.js'


const router = express.Router()

router.post('/product',authadmin, content('multipart/form-data'), upload,uploadProductCarousel)
router.post('/news',authadmin, content('multipart/form-data'), upload,uploadNewsCarousel)
router.get('/', getImages)
router.delete('/product/:id', authadmin, deletePorductImage)
router.delete('/news/:id', authadmin, deleteNewsImage)

export default router
