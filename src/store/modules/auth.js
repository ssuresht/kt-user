import $axios from '@/services/api'
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  // AUTH_FORGOT,
  AUTH_RESET,
  AUTH_SEND_SIGNUP_EMAIL,
  AUTH_CHECK_SIGNUP_TOKEN,
  AUTH_USER_TO_SIGN_UP,
  AUTH_SIGNUP,
  AUTH_STUDENT_PASSWORD_RESET,
  AUTH_SAVE_FORGOT_TOKEN
} from '@/store/actions/auth'
import router from '@/router/index.js'
import axios from "@/services/api";

function initialState() {
  return {
    token: '',
    status: '',
    userToSignUp: null,
    user: null,
    forgotPasswordToken: null,
  }
}

const state = initialState()

const getters = {
  token: state => state.token,
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user,
  userToSignupEmail: state => state.userToSignUp.email_valid,
  forgotPasswordToken: state => state.forgotPasswordToken
}
// where is error
const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('AUTH_REQUEST')
      $axios
        .post(`/student/log-in`, params)
        .then(response => {
          const token = response.data.data.token
          const user = response.data.data.student
          $axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
          commit('AUTH_SUCCESS', { token, user })
          resolve(response)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  [AUTH_LOGOUT]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true)
      commit('AUTH_REQUEST')
      $axios
        .post(`/student/logout`)
        .then(resp => {
          commit('AUTH_LOGOUT')
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false)
          commit('AUTH_LOGOUT')
        })
    })
  },
  // [AUTH_FORGOT]: ({ commit, dispatch }, params) => {
  //   return new Promise((resolve, reject) => {
  //     dispatch('API_PROCESSING', true, { root: true })
  //     commit('AUTH_REQUEST')
  //     $axios
  //       .post(`/student/password-reset`, params)
  //       .then(resp => {
  //         resolve(resp)
  //       })
  //       .catch(err => {
  //         commit('AUTH_ERROR')
  //         reject(err)
  //       })
  //       .finally(() => {
  //         dispatch('API_PROCESSING', false, { root: true })
  //       })
  //   })
  // },

  [AUTH_RESET]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      $axios
        .post(`/student/forget-password`, params)
        .then(resp => {
          // let me write code
         console.log(resp)
         let token = resp
          commit('AUTH_SAVE_FORGOT_TOKEN', { token })
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  [AUTH_STUDENT_PASSWORD_RESET]: ({ commit, dispatch }, params) => {

    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      axios
        .post(`/student/reset-password`, params)
        .then(resp => {
          console.log(resp)
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  [AUTH_CHECK_SIGNUP_TOKEN]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {   
      dispatch('API_PROCESSING', true, { root: true })
      $axios
        .post(`/student/signup-request-token-check`, params)
        .then(resp => {
          const user = resp.data
          commit('AUTH_USER_TO_SIGN_UP', { user })
          resolve(resp)
        })
        .catch(err => {
          if (err.status == 400) {
           router.replace({'query': null});
          }
          commit('AUTH_ERROR')
          reject(err)

        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
   [AUTH_SEND_SIGNUP_EMAIL]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {   
      dispatch('API_PROCESSING', true, { root: true })
      $axios
        .post(`/student/signup-request-email`, params)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)

        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
  [AUTH_SIGNUP]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {   
      dispatch('API_PROCESSING', true, { root: true })
      $axios
        .post(`/student/signup`, params.studentData)
        .then(resp => {
          router.replace({'query': null});
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          reject(err)

        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
}

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = 'loading'
  },

  [AUTH_SUCCESS]: (state, params) => {
    state.status = 'success'
    state.user = params.user
    state.token = params.token
    // state.user.full_name = params.user.last_name + ' ' + params.user.first_name
  },

  [AUTH_ERROR]: state => {
    state.status = 'error'
  },
  [AUTH_USER_TO_SIGN_UP]: (state,params) => {
    state.userToSignUp = params.user.data.data
  },
  [AUTH_SAVE_FORGOT_TOKEN]: (state,params) => {
    state.forgotToken = params
  },
  [AUTH_LOGOUT]: state => {
    state.isLoggedIn = false
    router.push({ name: 'Top' }).catch(() => {})

    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
    window.localStorage.clear()
    state.status = ''
    state.user = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}