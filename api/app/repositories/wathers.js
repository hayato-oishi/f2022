import database from '../modules/database.js'
class Wathers {
  async list({ start, end }) {
    return await database.query(
      'SELECT * FROM wathers WHERE (wather_date BETWEEN ? AND ?)',
      [start, end]
    )
  }
}

export default new Wathers()
