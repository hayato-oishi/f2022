import Controller from './controller.js'
import user from '../services/user.js'

class User extends Controller {
  async login(req, res, next) {
    try {
      const response = await user.login(req.query)
      return res.json(super.responseDto(response, 'user'))
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new User()
