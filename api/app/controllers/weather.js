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

  async insert(req, res, next) {
    const isValidDate = ((date) => {
      if(!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return false
      }
      const time = new Date(date).getTime()
      if(!time && time !== 0) {
        return false
      }
      return new Date(date).toISOString().slice(0,10) === date
    })

    try {
      const date = req.body.date
      const code = req.body.code ?? null

      if (!date) {
        return res.json(super.responseDto({error: 'dateは必須です'}))
      }

      if (!isValidDate(date)) {
        return res.json(super.responseDto({error: 'dateのフォーマットが不正です（YYYY-MM-DD）'}))
      }

      if (
        (code != null) &&
        (code > 2 || 0 > code)
      ) {
        return res.json(super.responseDto({error: 'codeは0, 1, 2のみ指定可能です'}))
      }

      const response = await weather.insert(req.body)
      return res.json(super.responseDto(response))
    } catch (e) {
      // エラー
      next(e)
    }
  }
}

export default new Weather()
