import Users from '../models/users.js'
import users from '../repositories/users.js'
import token from '../modules/token.js'
class User {
  async login({ email, password }) {
    try {
      const records = await users.login({ email, password })
      const [ user ] = records.map((record) => {
        const user = new Users(record).get()
        delete user.password
        delete user.createdAt
        return user
      })
      return {
        user: user,
        token: token.create()
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new User()
