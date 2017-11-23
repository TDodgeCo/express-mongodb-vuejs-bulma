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
        commit('createTask', {task: response.data})
      })
    },
    updateTask: function ({ commit }, task) {
      axios({
        method: 'put',
        url: '/api/tasks/' + task.taskId,
        data: {
          title: task.title,
          description: task.description
        }
      }).then((response) => {
        axios.get('/api/tasks')
        .then((response) => {
          commit('setTaskList', { list: response.data })
        })
      })
    },
    completeTask: function ({ commit }, task) {
      axios({
        method: 'put',
        url: '/api/tasks/' + task.taskId,
        data: {
          status: 'completed'
        }
      }).then((response) => {
        console.log(response)
        axios.get('/api/tasks')
        .then((response) => {
          commit('setTaskList', { list: response.data })
        })
      })
    },
    uncompleteTask: function ({ commit }, task) {
      axios({
        method: 'put',
        url: '/api/tasks/' + task.taskId,
        data: {
          status: task.status
        }
      }).then((response) => {
        console.log(response)
        axios.get('/api/tasks')
        .then((response) => {
          commit('setTaskList', { list: response.data })
        })
      })
    },
    deleteTask: function ({ commit }, task) {
      axios({
        method: 'put',
        url: '/api/tasks/' + task.taskId,
        data: {
          status: 'deleted'
        }
      }).then((response) => {
        axios.get('/api/tasks')
        .then((response) => {
          commit('setTaskList', { list: response.data })
        })
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
