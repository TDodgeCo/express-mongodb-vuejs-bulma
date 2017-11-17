<template lang="html">
  <form @submit.prevent="createTask">
    <input type="text" v-model="title" placeholder="Title"/>
    <input type="text" v-model="description" placeholder="Description"/>
    <input type="submit" value="Create A New Task"/>
  </form>
  
</template>
<script>
export default {
  name: 'CreateTask',
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
    }
  }
}
</script>
