<template lang="html">
  <div>
    <i :value="complete" @click="completeTask" class="fa fa-check"></i>
    <i :value="update" @click="showModal = !showModal" class="fa fa-pencil-square-o"></i>
    <i :value="remove" class="fa fa-trash-o"></i>
    <div v-bind:class="{ 'is-active': showModal }" class="modal">
      <div class="modal-background" @click="showModal = !showModal"></div>
      <div class="modal-content">          
        <div class="panel">
            <form @submit.prevent="updateTask()">
                <div class="field">
                <div class="control">
                    <label class="label">New Title {{taskId}}</label>
                    <input v-model="newTitle" class="input" type="text" placeholder="Text input">
                </div>
                </div>
                <div class="field">
                <label class="label">New Description</label>
                <div class="control">
                    <textarea v-model="newDescription" class="textarea" placeholder="Textarea"></textarea>
                </div>
                </div>
                <div class="field">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                </div>
            </form>
        </div>          
      </div>
      <button class="modal-close is-large" aria-label="close" @click="showModal = !showModal"></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UpdateTodo',
  props: ['taskId'],
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
      this.$store.dispatch('completeTask', e.target.value)
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
    }
  }
}
</script>
<style scoped>
    i {
        margin-right: 10px;
    }
    .panel {
        background-color: rgba(250, 250, 250, 1);
        padding: 15px;
    }
</style>

