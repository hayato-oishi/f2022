import Controller from './controller.js'
import database from '../modules/database.js'
// import user from '../services/user.js'

class User extends Controller {
  async login(req, res, next) {
    try {
      const records = await database.get('select email from users')
      return res.json({ records })
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new User()
