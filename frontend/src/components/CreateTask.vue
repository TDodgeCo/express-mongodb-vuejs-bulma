<template lang="html">
  <div class="columns is-centered">
    <div v-bind:class="{ 'is-active': showCreateModal }" class="modal animated fadeIn">
      <div @click="closeModal" class="modal-background"></div>
      <div class="modal-content">
        <div class="panel">
          <h1>Create a New Todo</h1>
          <form @submit.prevent="createTask">              
            <div class="field">
              <div class="control">
                <input class="input" v-model="title" type="text" placeholder="Title">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea class="textarea" v-model="description" type="text" placeholder="Description"></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-link" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>          
      </div>
      <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>    
  </div>
</template>
<script>

export default {
  name: 'CreateTask',
  props: ['showCreateModal'],
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    createTask () {
      console.log('dispatching')
      this.$store.dispatch({
        type: 'createNewTask',
        title: this.title,
        description: this.description
      })
      this.title = ''
      this.description = ''
      this.closeModal()
    },
    closeModal () {
      this.$emit('closeCreateModal')
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 25px;
}
.panel {
  background-color: rgba(250, 250, 250, 1);
  padding: 45px;
  border-radius: 5px;
}
</style>

