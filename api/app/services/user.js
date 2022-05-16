import Users from '../models/users.js'
import users  from '../repositories/users.js'
class User {
  async login({ email, password }) {
    try {
      const records = await users.login({ email, password })
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
