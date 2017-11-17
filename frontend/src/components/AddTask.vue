<template lang="html">
  <button type="button" class="button" @click="createTask()">Create A New Task</button>
</template>
<script>
export default {
  name: 'AddTask',
  methods: {
    createTask () {
      this.$store.dispatch('createNewTask')
    }
  }
}
</script>
