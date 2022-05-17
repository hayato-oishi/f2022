import { Router } from 'express'
import user from '../controllers/user.js'
const router = Router()

// 天気リスト取得API
router.get('/wather/list', user.login)

export default router
