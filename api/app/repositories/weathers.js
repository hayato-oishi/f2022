import database from '../modules/database.js'
class Weathers {
  async list({ start, end }) {
    return await database.query(
      'SELECT * FROM weathers WHERE (weather_date BETWEEN ? AND ?)',
      [start, end]
    )
  }
}

export default new Weathers()
