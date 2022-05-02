import axios from "@/services/api";

function initialState() {
  return {
    status: "",
    appInfoStore: {},
  };
}

const state = initialState();

const getters = {
  getAppInfoStore: (state) => state.appInfoStore,
};

const actions = {
  ["APPLICATION_STORE"]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .post(`/student/applications`, params)
        .then((response) => {
          commit("APPLICATION_STORE_SUCCESS", response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          dispatch("API_PROCESSING", false, { root: true });
        });
    });
  },
  ["APPLICATION_UPDATE"]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .post(`/student/applications/update`, params)
        .then((response) => {
          commit("APPLICATION_UPDATE_SUCCESS", response.data);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          dispatch("API_PROCESSING", false, { root: true });
        });
    });
  },
};

const mutations = {
  ["APPLICATION_STORE_SUCCESS"]: (state) => {
    state.status = "sucess";
  },

  ["APPLICATION_UPDATE_SUCCESS"]: (state) => {
    state.status = "sucess";
  },

  ["APPLICATION_INFO"]: (state, payload) => {
    state.appInfoStore = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
