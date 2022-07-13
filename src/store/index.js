import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    github: ""
  },
  getters: {
  },
  mutations: {
    setGitHub(state, github) {
      state.github = github;
      if (/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(github)) {
        window.localStorage.setItem("github", github);
      } else {
        window.localStorage.setItem("github", "");
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
