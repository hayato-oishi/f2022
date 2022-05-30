import { Router } from 'express'
import weather from '../controllers/weather.js'
const router = Router()

// 天気リスト取得
router.get('/weather', weather.list)
// 天気登録
router.post('/weather', weather.insert)

export default router
