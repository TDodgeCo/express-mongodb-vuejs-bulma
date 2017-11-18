<template lang="html">
  <div class="">
    <table class="table">
      <thead>
        <tr>
          <th class="column">Todo</th>
          <th>Description</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="item.status[0] != 'deleted'" v-for="item in tasks">
          <td>{{item.title}}</td>
          <td>{{item.description}}</td>
          <td><i v-if="item.status[0] == 'completed'" class="fa fa-check-square-o"></i></td>
          <td>            
            <update-todo :taskId="item._id" :title="item.title" :description="item.description"></update-todo>
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
  table {
    min-width: 100%;
  }
  th {
    min-width: 25%;
  }
</style>
