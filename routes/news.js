import express from 'express'
import content from '../middleware/content.js'
import authadmin from '../middleware/authadmin.js'
import upload from '../middleware/upload.js'

import {
  createNews,
  getAllNews,
  getNewsById,
  updateNewsById,
  deleteNews,
  updateNews,
  getNews
} from '../controllers/news.js'

const router = express.Router()

router.post('/', authadmin, content('multipart/form-data'), upload, createNews)
router.get('/all', authadmin, getAllNews)
router.get('/', getNews)
router.get('/:id', getNewsById)
router.patch('/:id', authadmin, content('multipart/form-data'), upload, updateNewsById)
router.post('/update', authadmin, updateNews)
router.delete('/:id', authadmin, deleteNews)


export default router
