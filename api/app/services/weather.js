import Weathers from '../models/weathers.js'
import weathers from '../repositories/weathers.js'

class Weather {
  async list({ start, end }) {
    try {
      const records = await weathers.list({ start, end })
      const listOfWeather = records.map((record) => {
        return new Weathers(record).getAll()
      })
      return { listOfWeather }
    } catch (e) {
      throw new Error(e)
    }
  }

  async insert({ date, code }) {
    try {
      return await weathers.insert({ date, code })
    } catch (e) {
      return { 'error': '登録に失敗しました' }
    }
  }
}

export default new Weather()
