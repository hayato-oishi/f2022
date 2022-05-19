import Controller from './controller.js'
import wather from '../services/wather.js'

class Wather extends Controller {
  async list(req, res, next) {
    try {
      const response = await wather.list(req.query)
      return res.json(super.responseDto(response))
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Wather()
