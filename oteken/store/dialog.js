export const state = () => ({
  // ダイアログの開閉状態
  isOpen: false,
  // ダイアログのタイトル
  title: '',
  // ダイアログのテキスト
  text: ''
})

export const mutations = {
  // ダイアログが開いたとき
  open(state, { text, title }) {
    state.text = text
    state.title = title
    state.isOpen = true
  },
  close(state) {
    state.text = ''
    state.title = ''
    state.isOpen = false
  }
}

export const actions = {
  // ダイアログを閉じる
  open({ commit }, { text, title }) {
    commit('open', { text, title })
  },
  // ダイアログを開く
  close({ commit }) {
    commit('close')
  }
}
