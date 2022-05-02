import {
  GET_ALL_MEDIA,
  GET_ALL_MEDIA_SUCCESS,
  GET_MEDIA,
  GET_MEDIA_SUCCESS,
} from "../actions/media";
import axios from "@/services/api";
function initialState() {
  return {
    mediaList: null,
    pagination: null,
    media: null,
  };
}

const state = initialState();

const getters = {
  getAllMediaList: (state) => state.mediaList,
  getMediaListPagination: (state) => state.pagination,
  getMedia: (state) => state.media,
};

const actions = {
  [GET_ALL_MEDIA]: ({ commit }, params) => {
    return new Promise((ressolve, reject) => {
      axios
        .get("/student/media-posts", {
          params,
        })
        .then((response) => {
          commit(GET_ALL_MEDIA_SUCCESS, response.data);
          ressolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  [GET_MEDIA]: ({ commit }, id) => {
    return new Promise((ressolve, reject) => {
      axios
        .get(`/student/media-posts/${id}`)
        .then((response) => {
          commit(GET_MEDIA_SUCCESS, response.data);
          ressolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  [GET_ALL_MEDIA_SUCCESS]: (state, payload) => {
    state.mediaList = payload.data.data;
    state.pagination = payload.data.paginate;
  },
  [GET_MEDIA_SUCCESS]: (state, payload) => {
    state.media = payload.data.data;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
