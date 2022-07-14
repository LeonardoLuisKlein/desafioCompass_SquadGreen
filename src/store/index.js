import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    github: "",
    controlGitHub: "",
    controlCertificates: "",
    controlTeam: "",
    controlInstitution: "",
    controlGraduation: "",
    certificate: "",
    certificates: [],
    teamName: "",
    institution: "",
    graduation: "",
    fullname: "",
    email: "",

  },
  getters: {
  },
  mutations: {
    setGitHub(state, github) {
      state.github = github;
      if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(github)){
      localStorage.setItem("github", github);
      this.state.controlGitHub = true;
      } else{
        localStorage.setItem("github", "");
        this.state.controlGitHub = false;
      }
    },
    setCertificate(state, certificate) {
      state.certificate = certificate
      if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(certificate)) {
        this.state.controlCertificates = true;
      } else {
        localStorage.setItem("certificates", "");
        this.state.controlCertificates = false;
      }
    },

    setCertificates(state, certificates) {
      state.certificates.push(certificates)
      localStorage.setItem("certificates", certificates);
    },
    setTeamName(state, teamName) {
      state.teamName = teamName;
      if(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(teamName)) {
        localStorage.setItem("teamName", teamName);
        this.state.controlTeam = true;
      } else {
        localStorage.setItem("teamName", "");
        this.state.controlTeam = false;
      }
    },
    setInstitution(state, institution) {
      state.institution = institution;
      if(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/.test(institution)) {
        localStorage.setItem("institution", institution);
        this.state.controlInstitution = true;
      } else {
        localStorage.setItem("institution", "");
        this.state.controlInstitution = false;
      }
    },
    setGraduation(state, graduation) {
      state.graduation = graduation;
      if(/^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/.test(graduation)) {
        localStorage.setItem("graduation", graduation);
        this.state.controlGraduation = true;
      } else {
        localStorage.setItem("graduation", "");
        this.state.controlGraduation = false;
      }
    },
    setFullname(state, fullname) {
      state.fullname = fullname;
      if(/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname)){
      localStorage.setItem("fullname", fullname);
      this.state.control = true;
      } else{
        localStorage.setItem("fullname", "");
        this.state.control = false;
      }
    },
    setEmail(state, email) {
      state.email = email;
      if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)){
      localStorage.setItem("email", email);
      this.state.control = true;
      } else{
        localStorage.setItem("email", "");
        this.state.control = false;
      }
    },

  },
  actions: {
    setGitHub({ commit }, github) {
      commit("setGitHub", github);
    },
    setCertificate({ commit }, certificate) {
      commit("setCertificate", certificate)
    },
    setCertificates({ commit }, certificate) {
      commit("setCertificates", certificate)
    },
    setTeamName({ commit }, teamName) {
      commit("setTeamName", teamName);
    },
    setInstitution({ commit }, institution) {
      commit("setInstitution", institution);
    },
    setGraduation({ commit }, graduation) {
      commit("setGraduation", graduation)
    },
    setFullname({ commit }, fullname) {
      commit("setFullname", fullname);
    },
    setEmail({ commit }, email) {
      commit("setEmail", email);
    },

  },
  modules: {
  }
})
