<template lang="html">
  <button type="button" class="button" @click="addProject()">Create A New Task</button>
</template>
<script>
export default {
  name: 'AddTask',
  methods: {
    createTask () {
      this.$store.dispatch('addNewTask')
    }
  }
}
</script>
