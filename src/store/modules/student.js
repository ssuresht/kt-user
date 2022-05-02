import axios from '@/services/api'

import {
  STUDENT_REQUEST,
  STUDENT_GET_ALL,
  STUDENT_GET_ALL_SUCCESS,
  STUDENT_GET,
  STUDENT_GET_SUCCESS,
  STUDENT_UPDATE,
  STUDENT_UPDATE_SUCCESS,
  STUDENT_DELETE_SUCCESS,
  GET_EDUCATION__FACILITY_DATA
} from '@/store/actions/student'

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


  [STUDENT_UPDATE]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch('API_PROCESSING', true, { root: true })
      commit('STUDENT_REQUEST')
      axios
        .post(`student/students/${params.id}`, params.param)
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
  }

  
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
