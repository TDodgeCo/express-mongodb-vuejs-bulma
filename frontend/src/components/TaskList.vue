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
          <td><i v-if="item.completed" class="fa fa-check"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'TaskList',
  computed: mapState([
    'tasks'
  ])
}
</script>

<style lang="css">

</style>
