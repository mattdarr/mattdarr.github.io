import Vue from 'vue'
import Vuex from 'vuex'
// root vuex setup
import getters from './getters'
import mutations from './mutations'
const projects = require('./data/projects');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: projects,
    currentProject: projects.work[Math.floor(Math.random() * projects.work.length)],
  },
  getters,
  mutations,
})