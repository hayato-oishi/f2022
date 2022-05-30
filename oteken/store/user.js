export const state = () => ({
  userName: '',
  token: null,
})

export const mutations = {
  set(state, { token = '', user = null }) {
    if (token) {
      state.userName = user?.userName ?? ''
      state.token = token
      window.sessionStorage.setItem('user', JSON.stringify(state))
    }
  },
}
