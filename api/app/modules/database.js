import mysql from 'mysql'
import util from 'util'

class Database {
  pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'oteken',
  })

  async get(query) {
    this.pool.query = util.promisify(this.pool.query)
    try {
      const records = await this.pool.query(query)
      this.pool.end()
      return records
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default new Database()
