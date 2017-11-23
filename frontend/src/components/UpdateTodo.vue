<template lang="html">
  <div>
    <i @click="completeTask" class="fa fa-check"></i>
    <i :value="update" @click="showModal = !showModal" class="fa fa-pencil-square-o"></i>
    <i :value="remove" @click="deleteTask" class="fa fa-trash-o red"></i>
    <update-task @closeModal="showModal = !showModal" :showModal="showModal" :title="title" :description="description" :taskId="taskId" />
  </div>
</template>
<script>
import UpdateTask from '../components/UpdateTask'
export default {
  name: 'UpdateTodo',
  components: {
    UpdateTask
  },
  props: ['taskId', 'title', 'description'],
  data () {
    return {
      showModal: false,
      complete: '',
      update: '',
      remove: '',
      newTitle: '',
      newDescription: ''
    }
  },
  methods: {
    completeTask (e) {
      this.$store.dispatch({
        type: 'completeTask',
        taskId: this.taskId,
        status: e.target.value
      })
    },
    updateTask (e) {
      this.$store.dispatch({
        type: 'updateTask',
        taskId: this.taskId,
        title: this.newTitle,
        description: this.newDescription
      })
      this.newTitle = ''
      this.newDescription = ''
      this.showModal = false
    },
    deleteTask (e) {
      this.$store.dispatch({
        type: 'deleteTask',
        taskId: this.taskId
      })
    }
  }
}
</script>
<style scoped>
i:hover {
  cursor: pointer;
  color: #00D1B2;
  transition: .4s;
}
i.red:hover {
  color: #ea4133;
  transition: .4s;
}
.panel {
  background-color: rgba(250, 250, 250, 1);
  padding: 45px;
  border-radius: 5px;
}
.new {
  margin: 20px 0;
}
.current {
  color: #fff;
}
</style>

