import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    day: 0,
    month: 0,
    year: 0,
    age: 0,
    calc: 0,
  },
  getters: {},
  mutations: {
    setDay(state, day) {
      state.day = day;
      console.log(day)
    },
    setMonth(state, month) {
      state.month = month;
      console.log(month)
    },
    setYear(state, year) {
      state.year = year;
      console.log(year)
    },
    setAge(state, age) {
      state.age = age;
    },
    calc(state,calc) {
      state.calc = calc
      let d = new Date();
      let ano_atual = d.getFullYear();
      let mes_atual = d.getMonth() + 1;
      let dia_atual = d.getDate();
      let quantos_anos = ano_atual - this.year;

      if (
        mes_atual < this.month ||
        (mes_atual == this.month && dia_atual < this.day)
      ) {
        quantos_anos--;
      }
      
      quantos_anos < 0 ? 0 : quantos_anos;
      quantos_anos = this.calc
      console.log(this.state.month)
      return this.calc = this.age
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
    calc ({ commit }, calc) {
      commit("calc", calc);
    }
  },
  modules: {},
});
