import { Router } from 'express'
import wather from '../controllers/wather.js'
const router = Router()

// 天気リスト取得API
router.get('/wather/list', wather.list)

export default router
