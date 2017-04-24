import * as types from './types'

export default {
  [types.AUTHENTICATE] (state, userId) {
    state.authenticated = true
    state.userId = userId
  }
}
