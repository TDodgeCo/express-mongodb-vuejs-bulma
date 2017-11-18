<template lang="html">
  <div class="columns is-centered">
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="column is-half">
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
      <button class="modal-close is-large" aria-label="close"></button>
    </div>    
  </div>
</template>
<script>

export default {
  name: 'CreateTask',
  data () {
    return {
      showModal: false,
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
    }
  }
}
</script>
