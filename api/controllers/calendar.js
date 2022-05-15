import Controller from './controller.js'
import moment from 'moment'
// import calendar from '../services/calendar.js'

class Calendar extends Controller {
  async month(req, res, next) {
    // 余裕あったら後でエラー処理
    const reqDate = moment(`${req.query.years} ${req.query.months}`, 'YYYY MM')
    reqDate.isValid()
    // 指定月の最終日
    const lastDate = reqDate.clone().endOf('month').date()
    // 前月の最終日
    const prevLastDate = reqDate.clone().add(-1, 'months').date()
    // 前月の表示数
    const prevDay = reqDate.clone().day() - 1
    // 次月の表示数
    const nextDay = 7 - reqDate.clone().endOf('month').day() - 1

    try {
      const days = []
      for (let i = prevDay; i > 0; i--) {
        // 指定年月
        const date = reqDate.clone()
        // 日付設定
        date.date(prevLastDate - i)
        days.push(date.format('YYYY-MM-DD'))
      }
      for (let i = 1; lastDate >= i; i++) {
        // 指定年月
        const date = reqDate.clone()
        date.date(i)
        days.push(date.format('YYYY-MM-DD'))
      }
      for (let i = 1; nextDay >= i; i++) {
        const date = reqDate.clone()
        date.add(1, 'months')
        date.date(i)
        days.push(date.format('YYYY-MM-DD'))
      }
      return res.json({ days })
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Calendar()
