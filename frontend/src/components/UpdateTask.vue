<template>
  <div v-bind:class="{ 'is-active': showModal }" class="modal animated fadeIn">
  <div class="modal-background" @click="closeModal()"></div>
    <div class="modal-content">          
      <div class="panel">
        <form @submit.prevent="updateTask()">
          <div class="field notification is-info">
            <label class="label current">Current Title: </label>
            <div class="control">
              <p>
                {{title}}
                {{taskId}}
              </p>
            </div>
          </div>
          <div class="field new">
            <div class="control">
              <label class="label">New Title</label>
              <input v-model="newTitle" class="input" type="text" placeholder="...">
            </div>
          </div>
          <div class="field notification is-info">
            <label class="label current">Current Description: </label>
            <div class="control">
              <p>
                {{description}}
              </p>
            </div>
          </div>
          <div class="field new">
            <label class="label">New Description</label>
            <div class="control">
              <textarea v-model="newDescription" class="textarea" placeholder="..."></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-info">Submit</button>
            </div>
          </div>
        </form>
      </div>          
    </div>
    <button class="modal-close is-large" aria-label="close" @click="showModal = !showModal"></button>
  </div>
</template>

<script>
export default {
  name: 'UpdateTodo',
  props: ['taskId', 'title', 'description', 'showModal'],
  data () {
    return {
      complete: '',
      update: '',
      remove: '',
      newTitle: '',
      newDescription: '',
      oldDescription: this.description,
      oldTitle: this.title
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
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
      this.$emit('closeModal')
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
