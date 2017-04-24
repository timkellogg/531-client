import * as types from './types'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export const register = ({ commit }, user) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/users', user)
        .then(res => {
          const userId = res.data.userId

          localStorage.setItem("userId", userId)
          resolve(commit(types.AUTHENTICATE, userId))
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
  })
}

export const login = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.post('/api/auth/login', payload)
        .then(res => {
          const userId = res.data.userId

          localStorage.setItem("userId", userId)
          resolve(commit(types.AUTHENTICATE), userId)
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
  })
}
