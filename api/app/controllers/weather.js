import Controller from './controller.js'
import weather from '../services/weather.js'

class Weather extends Controller {
  async list(req, res, next) {
    try {
      const response = await weather.list(req.query)
      return res.json(super.responseDto(response))
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Weather()
