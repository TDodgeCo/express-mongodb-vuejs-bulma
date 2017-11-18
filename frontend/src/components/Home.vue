<template lang="html">
  <div id="home">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="notification is-primary">
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
