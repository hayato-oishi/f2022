export default function ({ app, store }) {
  app.router.onReady(() => {
    setUser(store)
  })
}

const setUser = ((store) => {
  const user = window.sessionStorage.getItem('user')
  store.commit('user/set', JSON.parse(user))
})
