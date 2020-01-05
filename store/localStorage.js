export const state = () => ({
  user: {},
  logged: false
})

export const mutations = {
  login(state, payload) {
    state.user = payload
    state.logged = true
  },
  logout(state) {
    state.user = {}
    state.logged = false
  }
}
