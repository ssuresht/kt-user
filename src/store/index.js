import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import student from "./modules/student";
import internship from "./modules/internship";
import master from "./modules/master";
import media from "./modules/media";
Vue.use(Vuex);
const getDefaultState = () => {
  return {
    init: 0,
    apiProcessing: false,
    modalVisible: false,
    modalComponent: null,
    modalHeight: null,
    modalWidth: null,
    // if false then the default padding of the v-card-text be applied
    // if true then default padding will be removed
    modalDense: false,
  };
};

const store = new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    showModal(state, { component, width, height, dense }) {
      state.modalVisible = true;
      state.modalComponent = component;
      state.modalHeight = height;
      state.modalWidth = width;
      state.modalDense = dense ?? false;
    },
    hideModal(state) {
      state.modalVisible = false;
      state.modalComponent = null;
    },
    setApiProcessing(state, payload) {
      state.apiProcessing = payload;
    },
  },
  actions: {
    API_PROCESSING({ commit }, payload) {
      commit("setApiProcessing", payload);
    },
  },
  getters: {
    getApiProcessingStatus: (state) => state.apiProcessing,
    getModalComponent: (state) => state.modalComponent,
    getModalHeight: (state) => state.modalHeight,
    getModalWidth: (state) => state.modalWidth,
    getModalDense: (state) => state.modalDense,
  },

  modules: {
    auth,
    internship,
    master,
    media,
    student,
  },
  plugins: [createPersistedState()],
});

export default store;
