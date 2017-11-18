<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Description</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tasks">
          <td>{{item.title}}</td>
          <td>{{item.description}}</td>
          <td>
            <i v-if="item.completed" class="fa fa-check-square-o"></i>
            <update-todo :taskId="item._id" v-else></update-todo>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UpdateTodo from '../components/UpdateTodo'

import { mapState } from 'vuex'
export default {
  name: 'TaskList',
  data () {
    return {
      taskId: ''
    }
  },
  components: {
    UpdateTodo
  },
  computed: mapState([
    'tasks'
  ])
}
</script>

<style lang="css">

</style>
