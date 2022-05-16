import Users from '../models/users.js'
import database from '../modules/database.js'
class User {
  async login({ email, password }) {
    try {
      const records = await database.get(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      )
      const result = records.map((record) => {
        const user = new Users(record)
        return user.get()
      })
      return result
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new User()
