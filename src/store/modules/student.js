import $axios from '@/services/api'

import {
  STUDENT_REQUEST,
  STUDENT_GET_ALL,
  STUDENT_GET_ALL_SUCCESS,
  STUDENT_GET,
  STUDENT_GET_SUCCESS,
  STUDENT_UPDATE,
  STUDENT_UPDATE_EMAIL,
  STUDENT_UPDATE_SUCCESS,
  STUDENT_DELETE_SUCCESS,
  GET_EDUCATION__FACILITY_DATA,
  FACILITIES_CREATE,
  STUDENT_PASSWORD_UPDATE,
  EMAIL_CHANGE_TOKEN,
  STUDENT_UPDATE_MEMBERSHIP,
  STUDENT_UPDATE_MEMBERSHIP_SUCCESS
} from '@/store/actions/student'
import router from '@/router/index.js'
import axios from "@/services/api";
function initialState() {
  return {
    status: '',
    students: [],
    student: null,
    educationFacilities: null,
  }
}

const state = initialState()

const getters = {
  getAllStudents: state => state.students,
  getStudent: state => state.student,
  getEducationFacilities: state => state.educationFacilities,
}

const actions = {
  [STUDENT_GET_ALL]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .get(`student/students`)
        .then(response => {
          let data = response.data.data
          commit('STUDENT_GET_ALL_SUCCESS', data)

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  [STUDENT_GET]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .get(`student/students/${params.id}`)
        .then(response => {
          let data = response.data.data.data
          commit('STUDENT_GET_SUCCESS', data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },


  [STUDENT_UPDATE_EMAIL]:  ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .post(`student/send-email-change-request-token/${params.id}`, params.param)
        .then(response => {
          let data = response.data.data
          commit('STUDENT_UPDATE_SUCCESS', { data })

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
   [STUDENT_UPDATE]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      console.log(params)
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .put(`student/students/${params.id}`, params.param)
        .then(response => {
          let data = response.data.data
          commit('STUDENT_UPDATE_SUCCESS', { data })

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  [GET_EDUCATION__FACILITY_DATA]: ({ commit, dispatch }) => {
    dispatch('API_PROCESSING', true, { root: true })
    return new Promise((resolve, reject) => {
      axios
        .get('admin/education-facility')
        .then(response => {
          commit('STUDENT_EDUCATION_FACILITY_SUCCESS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
  [FACILITIES_CREATE]: ({ dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      axios
        .post(`admin/education-facility`, params)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },

  
  [STUDENT_PASSWORD_UPDATE]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .post(`student/student/change_password/`, params.param)
        .then(response => {
          let data = response.data.data
          commit('STUDENT_UPDATE_SUCCESS', { data })

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
  [EMAIL_CHANGE_TOKEN]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {   
      dispatch('API_PROCESSING', true, { root: true })
      $axios
        .post(`/student/email-request-token-check`, params)
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

  [STUDENT_UPDATE_MEMBERSHIP]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .put(`student/update-membership/${params.userId}`, params)
        .then(response => {
          let data = response.data.data
          commit('STUDENT_UPDATE_MEMBERSHIP_SUCCESS', { data })

          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
        .finally(() => {
          dispatch('API_PROCESSING', false, { root: true })
        })
    })
  },
  
}
 

const mutations = {
  [STUDENT_REQUEST]: state => {
    state.status = 'loading'
  },

  [STUDENT_GET_ALL_SUCCESS]: (state, params) => {
    state.students = params[0]
  },

  [STUDENT_GET_SUCCESS]: (state, params) => {
    state.student = params
  },



  [STUDENT_UPDATE_SUCCESS]: state => {
    state.status = 'success'
  },

  [STUDENT_UPDATE_MEMBERSHIP_SUCCESS]: state => {
    state.status = 'success'
  },

  [STUDENT_DELETE_SUCCESS]: state => {
    state.status = 'success'
  },
  ['STUDENT_EDUCATION_FACILITY_SUCCESS']: (state, payload) => {
    state.educationFacilities = payload?.data?.education_facilities || []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
