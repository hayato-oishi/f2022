import Weathers from '../models/weathers.js'
import weathers from '../repositories/weathers.js'

class weather {
  async list({ start, end }) {
    try {
      const records = await weathers.list({ start, end })
      const result = records.map((record) => {
        return new Weathers(record).get()
      })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new weather()
