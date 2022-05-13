import { Router } from 'express'
import calendar from '../controllers/calendar.js'
const router = Router()

// カレンダー取得API
router.get('/calendar/month', calendar.month)

export default router
