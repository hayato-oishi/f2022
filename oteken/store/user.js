export const state = () => ({
  userName: '',
  token: null,
})

export const mutations = {
  login(state) {
    state.userName = user?.userName ?? ''
    state.token = token
  },
  logout(state) {
    state.userName = ''
    state.token = null
  }
}

export const actions = {
  login({ commit }, { token = '', user = null }) {
    if (token) {
      commit('login', { token, user })
      window.sessionStorage.setItem('user', JSON.stringify(state))
    }
  },
  logout() {
    commit('logout')
    window.sessionStorage.removeItem('user')
  }
}
