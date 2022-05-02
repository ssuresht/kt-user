import {
  GET_FAVOURITE_LIST,
  GET_FAVORITE_LIST_SUCCESS,
} from "../actions/favourite";
import axios from "@/services/api";

function initialState() {
  return {
    favouriteList: [],
  };
}

const state = initialState();

const getters = {
  getFavouritesList: (state) => state.favouriteList,
};

const actions = {
  [GET_FAVOURITE_LIST]: ({ commit, dispatch }) => {
    dispatch("API_PROCESSING", true, { root: true });
    return new Promise((resolve, reject) => {
      return axios
        .get("/student/favorite")
        .then((response) => {
          commit(GET_FAVORITE_LIST_SUCCESS, response.data);
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
  [GET_FAVORITE_LIST_SUCCESS]: (state, payload) => {
    state.favouriteList = payload.data.data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
