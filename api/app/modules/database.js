import mysql from 'mysql'
import util from 'util'

class Database {
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })

  async query(query, params = []) {
    this.pool.query = util.promisify(this.pool.query)
    return await this.pool.query(query, params)
  }
}

export default new Database()
