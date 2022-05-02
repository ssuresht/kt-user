import axios from "@/services/api";

const state = {
  master: null,
};

const getters = {
  getMasterData: (state) => state.master,
};

const actions = {
  ["GET_MASTER_DATA"]: ({ commit, dispatch }) => {
    dispatch("API_PROCESSING", true, { root: true });
    return new Promise((resolve, reject) => {
      axios
        .get("/master")
        .then((response) => {
          commit("GET_MASTER_DATA_SUCCESS", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          dispatch("API_PROCESSING", false, { root: true });
        });
    });
  },
};

const mutations = {
  ["GET_MASTER_DATA_SUCCESS"]: (state, payload) => {
    state.master = payload.data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
