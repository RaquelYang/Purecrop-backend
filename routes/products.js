import express from 'express'
import content from '../middleware/content.js'
import authadmin from '../middleware/authadmin.js'
import upload from '../middleware/upload.js'

import {
  createProducts,
  getProducts,
  getAllProducts,
  getProductById,
  updateProductById,
  updateProducts,
  deleteProduct
} from '../controllers/products.js'

const router = express.Router()

router.post('/', authadmin, content('multipart/form-data'), upload, createProducts)
router.post('/update', authadmin, updateProducts)
router.get('/', getProducts)
router.get('/all', authadmin, getAllProducts)
router.get('/:id', getProductById)
router.patch('/:id', authadmin, content('multipart/form-data'), upload, updateProductById)
router.delete('/:id', authadmin, deleteProduct)


export default router
