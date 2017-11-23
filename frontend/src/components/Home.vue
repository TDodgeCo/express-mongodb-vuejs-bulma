<template lang="html">
  <div id="home">
    <div class="columns">
      <div class="column panel is-half is-offset-one-quarter">
        <div class="notification is-primary">
          <div class="columns is-desktop is-vcentered">
            <div class="column">
              <h1>Todo List</h1>
            </div>
            <div class="column">
              <a class="button btn is-info is-pulled-right" @click="showCreateModal = !showCreateModal">Create</a>
            </div>
          </div>      
        </div>
        <task-list />
        <create-task @closeCreateModal="showCreateModal = false" :showCreateModal="showCreateModal"/>
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
      showModal: false,
      showCreateModal: false
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
    transition: .4s;
  }
  h1 {
    font-size: 200%;
  }
  .panel {
    background-color: rgba(250, 250, 250, .66);
    padding: 45px;
    border-radius: 5px;
  }
</style>

