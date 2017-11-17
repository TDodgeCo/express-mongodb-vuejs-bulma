import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  actions: {
    loadTaskList: function ({ commit }) {
      axios.get('/api/tasks').then((response) => {
        commit('setTaskList', { list: response.data })
      }, (err) => {
        console.log(err)
      })
    },
    createNewTask: function ({ commit }) {
      axios.post('/api/tasks').then((response) => {
        commit('createTask', { task: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    setTaskList: (state, { list }) => {
      state.tasks = list
    },
    createTask: (state, { task }) => {
      state.tasks.push(task)
    }
  },
  getters: {
    openTasks: state => {
      return state.tasks.filter(task => !task
        .completed)
    }
  }
})
export default store
