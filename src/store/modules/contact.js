import axios from "@/services/api";
import {
  CONTACT_SUBMIT,
  CONTACT_SUBMIT_SUCCESS,
  CONTACT_SUBMIT_ERROR
} from "@/store/actions/contact";

function initialState() {
  return {
    data: []
  };
}

const state = initialState();

const getters = {};

const actions = {
  [CONTACT_SUBMIT]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      commit("CONTACT_SUBMIT");
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .post(`/student/contact`, params)
        .then(response => {
          commit("CONTACT_SUBMIT_SUCCESS", response.data.data);

          resolve(response);
        })
        .catch(error => {
          commit("CONTACT_SUBMIT_ERROR");

          reject(error);
        })
        .finally(() => {
          dispatch("API_PROCESSING", false, { root: true });
        });
    });
  }
};

const mutations = {
  [CONTACT_SUBMIT]: state => {
    state.status = "loading";
  },

  [CONTACT_SUBMIT_SUCCESS]: state => {
    state.status = "success";
  },

  [CONTACT_SUBMIT_ERROR]: state => {
    state.status = "error";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
