import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import authadmin from '../middleware/authadmin.js'
import {
  checkout,
  getMyOrders,
  getAllOrders,
  updateState
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', auth, content('application/json'), checkout)
router.get('/me', auth, getMyOrders)
router.get('/all', authadmin, getAllOrders)
router.post('/update', authadmin, updateState)
export default router
