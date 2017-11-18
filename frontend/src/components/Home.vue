<template lang="html">
  <div id="home">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="notification is-primary">
          <div class="columns">
            <div class="column">
              <p>Todo List</p>
            </div>
            <div class="column">
              <a class="button btn is-info is-pulled-right">Create</a>
            </div>
          </div>      
        </div>
        <task-list />
        <create-task :showModal="showModal"/>
      </div>
    </div>
  </div>
</template>
<script>
import TaskList from '../components/TaskList'
import CreateTask from '../components/CreateTask'

export default {
  name: 'home',
  components: {
    TaskList,
    CreateTask
  },
  data () {
    return {
      showModal: false
    }
  },
  mounted: function () {
    this.$store.dispatch('loadTaskList')
  }
}
</script>

<style scoped>
  .btn {
    border-radius: 50%;
    height: 72px;    
  }
</style>

