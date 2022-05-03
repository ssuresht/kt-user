import { FEEDBACK_GET, FEEDBACK_GET_SUCCESS } from "../actions/feedback";

import axios from "@/services/api";

function initialState() {
  return {
    feedbacks: null,
    comments: null,
  };
}

const getters = {
  getFeedbacks: (state) => state.feedbacks,
  getComments: (state) => state.comments,
};

const state = initialState();

const actions = {
  [FEEDBACK_GET]: ({ commit, dispatch }) => {
    dispatch("API_PROCESSING", true, { root: true });
    return new Promise((resolve, reject) => {
      return axios
        .get("/student/feedback")
        .then((response) => {
          commit(FEEDBACK_GET_SUCCESS, response.data);
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
  [FEEDBACK_GET_SUCCESS]: (state, payload) => {
    state.feedbacks = payload.data.feedbacks;
    state.comments = payload.data.comments;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
