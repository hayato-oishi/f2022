class Users {
  constructor(params) {
    this.id = params.id
    this.email = params.email
    this.password = params.password
    this.userName = params.user_name
    this.createdAt = params.created_at
  }

  get() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      userName: this.userName,
      createdAt: this.createdAt,
    }
  }
}

export default Users
