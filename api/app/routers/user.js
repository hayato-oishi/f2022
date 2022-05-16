import { Router } from 'express'
import user from '../controllers/user.js'
const router = Router()

// カレンダー取得API
router.get('/user/login', user.login)

export default router
