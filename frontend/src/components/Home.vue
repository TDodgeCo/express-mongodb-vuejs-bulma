<template lang="html">
  <div id="home">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Todo List
        </div>
        <task-list />
        <add-task />
      </div>
    </div>
  </div>
</template>
<script>
import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
export default {
  name: 'home',
  components: {
    TaskList,
    AddTask
  },
  mounted: function () {
    this.$store.dispatch('loadTaskList')
  }
}
</script>
