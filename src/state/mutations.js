import * as types from './types'

export default {
  [types.AUTHENTICATE] (state, userId) {
    state.authenticated = true
    state.userId = userId
  },
  [types.UNAUTHENTICATE] (state) {
    state.authenticated = false
    state.userId = null
  }
}
