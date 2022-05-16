import mysql from 'mysql'
import util from 'util'

class Database {
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })

  async get(query, params = []) {
    this.pool.query = util.promisify(this.pool.query)
    try {
      return await this.pool.query(query, params)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default new Database()
