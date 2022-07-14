import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: "",
    month: "",
    year: "",
    age: "",
  },
  getters: {},
  mutations: {
    setDay(state, day) {
      state.day = day;
    },
    setMonth(state, month) {
      state.month = month;
    },
    setYear(state, year) {
      state.year = year;
    },
    setAge(state, age) {
      state.age = age;
      let day = this.state.day;
      let month = this.state.month;
      let year = this.state.year;
      function idade() {
        var d = new Date(),
          ano_atual = d.getFullYear(),
          mes_atual = d.getMonth() + 1,
          dia_atual = d.getDate(),

          quantos_anos = ano_atual - year;
          
        if (mes_atual < month || (mes_atual == month && dia_atual < day)) {
          quantos_anos--;
        }
        return quantos_anos < 0 ? 0 : quantos_anos;
      }
      state.age = idade()
    },
  },
  actions: {
    setDay({ commit }, day) {
      commit("setDay", day);
    },
    setMonth({ commit }, month) {
      commit("setMonth", month);
    },
    setYear({ commit }, year) {
      commit("setYear", year);
    },
    setAge({ commit }, age) {
      commit("setAge", age);
    },
  },
  modules: {},
});
