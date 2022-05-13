import Controller from './controller.js'
// import calendar from '../services/calendar.js'

class Calendar extends Controller {
  static MESSAGE_MAX_LENGTH = 1000
  async month (req, res, next) {
    try {
      return  res.json({'aaaa': 'bbb'})
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Calendar ()
