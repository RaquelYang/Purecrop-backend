import express from 'express'
import content from '../middleware/content.js'
import authadmin from '../middleware/authadmin.js'

import {
  register,
  login,
  logout,
  getAdminInfo
} from '../controllers/admins.js'

const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)
router.delete('/logout', authadmin, logout)
router.get('/me', authadmin, getAdminInfo)

export default router
