export default function ({ app, store }) {
  app.router.onReady(() => {
    setUser(store)
  })
}

const setUser = ((store) => {
  const user = window.sessionStorage.getItem('user')
  if (user) {
    store.commit('user/login', JSON.parse(user))
  }
})
