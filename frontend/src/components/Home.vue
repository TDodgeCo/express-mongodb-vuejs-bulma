<template lang="html">
  <div id="home">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Todo List
        </div>
        <task-list />
        <create-task />
      </div>
    </div>
  </div>
</template>
<script>
import TaskList from '../components/TaskList'
// import AddTask from '../components/AddTask'
import CreateTask from '../components/CreateTask'
export default {
  name: 'home',
  components: {
    TaskList,
    CreateTask
  },
  mounted: function () {
    this.$store.dispatch('loadTaskList')
  }
}
</script>
