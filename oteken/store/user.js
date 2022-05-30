export const state = () => ({
  userName: '',
  token: null,
})

export const mutations = {
  login(state, { token = '', user = null }) {
    if (token) {
      state.userName = user?.userName ?? ''
      state.token = token
      window.sessionStorage.setItem('user', JSON.stringify(state))
    }
  },
  logout(state) {
    state.userName = ''
    state.token = null
    window.sessionStorage.removeItem('user')
  }
}
