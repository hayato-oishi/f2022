import Weathers from '../models/weathers.js'
import weathers from '../repositories/weathers.js'

class Weather {
  async list({ start, end }) {
    try {
      const records = await weathers.list({ start, end })
      const listOfWeather = records.map((record) => {
        return new Weathers(record).get()
      })
      return { listOfWeather }
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new Weather()
