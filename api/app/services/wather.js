import Wathers from '../models/wathers.js'
import wathers from '../repositories/wathers.js'

class Wather {
  async list({ start, end }) {
    try {
      const records = await wathers.list({ start, end })
      const result = records.map((record) => {
        return new Wathers(record).get()
      })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new Wather()
