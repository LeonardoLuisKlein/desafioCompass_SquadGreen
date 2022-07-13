import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    github: "",
    control: "",
  },
  getters: {
  },
  mutations: {
    setGitHub(state, github) {
      state.github = github;
      if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(github)){
      localStorage.setItem("github", github);
      this.state.control = true;
      } else{
        localStorage.setItem("github", "");
        this.state.control = false;
      }
    },
  },
  actions: {
    setGitHub({ commit }, github) {
      commit("setGitHub", github);
    },
  },
  modules: {
  }
})
