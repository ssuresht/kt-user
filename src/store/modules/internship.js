import axios from "@/services/api";

function initialState() {
  return {
    status: "",
    internship: [],
    singleInternship: {},
    internshipPagination: null,
    topPageResults: null,
    topSearchQueries: null,
  };
}

const state = initialState();

const getters = {
  getAllInternship: (state) => state.internship,
  getSingleInternship: (state) => state.singleInternship,
  getInternshipPagination: (state) => state.internshipPagination,
  getTopPageResults: (state) => state.topPageResults,
  getTopSearchQueries: (state) => state.topSearchQueries,
};

const actions = {
  ["INTERNSHIP_GET_ALL"]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .get(`/student/internship-post`, { params })
        .then((response) => {
          commit("INTERNSHIP_GET_ALL_SUCCESS", response.data);
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

  ["INTERNSHIP_GET"]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .get(`/student/internship-post/${params.id}`, { params })
        .then((response) => {
          commit("INTERNSHIP_GET_SUCCESS", response.data);

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

  ["INTERNSHIP_GET_FAVOURITE"]: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      dispatch("API_PROCESSING", true, { root: true });
      axios
        .post(
          `/student/internship-favourite/${params.internship_post_id}`,
          params
        )
        .then((response) => {
          commit("INTERNSHIP_GET_FAVOURITE_SUCCESS", response.data);

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
  ["ADD_TOP_PAGE_SEARCH_QUERRIES"]: (state, payload) => {
    state.topSearchQueries = payload;
  },
  ["INTERNSHIP_TOP_GET_ALL_SUCCESS"]: (state, payload) => {
    state.topPageResults = payload.data.data;
  },
  ["INTERNSHIP_GET_ALL_SUCCESS"]: (state, payload) => {
    state.status = "success";
    state.internship = payload.data.data;
    state.internshipPagination = payload.data.paginate;
  },

  ["INTERNSHIP_GET_SUCCESS"]: (state, payload) => {
    state.status = "success";
    state.singleInternship = payload.data.data;
  },

  ["INTERNSHIP_GET_FAVOURITE_SUCCESS"]: (state) => {
    state.status = "success";
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
