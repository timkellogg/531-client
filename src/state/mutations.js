import * as types from './types'

export default {
  [types.AUTHENTICATE] (state, userId) {
    state.authenticated = true
    state.user.id = userId
  },
  [types.UNAUTHENTICATE] (state) {
    state.authenticated = false
    state.user.id = null
  }
}
