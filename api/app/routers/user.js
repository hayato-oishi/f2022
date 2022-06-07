import { Router } from 'express'
import user from '../controllers/user.js'
const router = Router()

// 会員ログインAPI
router.post('/user/login', user.login)

export default router
