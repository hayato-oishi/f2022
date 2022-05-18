import Controller from './controller.js'
import moment from 'moment'
import calendar from '../services/calendar.js'

class Calendar extends Controller {
  async month(req, res, next) {
    const date = moment(`${req.query.year} ${req.query.month}`, 'YYYY MM')
    // Todo:余裕あったら後でバリデーション追加
    // date.isValid()
    try {
      const days = calendar.month(date)
      return res.json({ days })
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Calendar()
