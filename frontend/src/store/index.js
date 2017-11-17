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
    createNewTask: function ({ commit }, task) {
      console.log(task)
      axios({
        method: 'post',
        url: '/api/tasks',
        data: {
          title: task.title,
          description: task.description
        }
      }).then((response) => {
        console.log(response.data)
        commit('createTask', {task: response.data})
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
