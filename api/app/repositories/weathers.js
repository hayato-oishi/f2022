import database from '../modules/database.js'
class Weathers {
  async list({ start, end }) {
    return await database.query(
      'SELECT * FROM weathers WHERE (weather_date BETWEEN ? AND ?)',
      [start, end]
    )
  }

  async insert({ date, code }) {
    return await database.query(
      `INSERT INTO weathers (id, weather_date, weather_code, created_at) VALUES (DEFAULT, ?, ?, CURRENT_TIMESTAMP)`,
      [date, code]
    )
  }
}

export default new Weathers()
