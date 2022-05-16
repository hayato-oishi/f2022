import database from '../modules/database.js'
class User {
  async login({ email, password }) {
    return await database.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    )
  }
}

export default new User()
