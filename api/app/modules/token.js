import jwt from 'jsonwebtoken'

class Token {
  create() {
    return jwt.sign(
      {
        iss: 'http://localhost:3001',
        aud: 'http://localhost:3000',
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 120,
      },
      process.env.SECRET_KEY
    )
  }

  verify(token) {
    let result = true
    // 検証失敗
    try {
      jwt.verify(token, process.env.SECRET_KEY)
    } catch (e) {
      result = false
    }
    // 有効期限切れ
    if (
      Math.floor(Date.now() / 1000) > result.data.exp ||
      result.data.nbf > Math.floor(Date.now() / 1000)
    ) {
      result = false
    }
    return result
  }
}

export default new Token()
