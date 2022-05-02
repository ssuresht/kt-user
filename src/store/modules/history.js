import {
  GET_APPLICATION_HISTORY,
  GET_APPLICATION_HISTORY_SUCCESS,
} from "../actions/history";
import axios from "@/services/api";
const state = {
  histories: [],
};

const getters = {
  getHistories: (state) => state.histories,
};

const actions = {
  [GET_APPLICATION_HISTORY]: ({ commit, dispatch }) => {
    dispatch("API_PROCESSING", true, { root: true });
    return new Promise((resolve, reject) => {
      axios
        .get("student/applications")
        .then((response) => {
          commit(GET_APPLICATION_HISTORY_SUCCESS, response.data);
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
  [GET_APPLICATION_HISTORY_SUCCESS]: (state, payload) => {
    state.histories = payload.data.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
