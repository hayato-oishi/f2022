import { Router } from 'express'
import weather from '../controllers/weather.js'
const router = Router()

// 天気リスト取得API
router.get('/weather/list', weather.list)

export default router
