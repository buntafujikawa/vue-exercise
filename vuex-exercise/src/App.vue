<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :item="item"></item>
    </ul>
    <div>
      <input type="text" v-model="inputTitle">
      <button @click="ADD_TASK(inputTitle)">追加</button>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import * as types from './store/mutation-types';
  import Item from './Item.vue'

  export default {
    name: 'app',
    components: { Item },
    data () {
      return {
        inputTitle: ""
      }
    },
    methods: {
      ...mapActions([
        types.ADD_TASK
      ])
    },
    // これでdataにitemsを書く必要がなくなる
    computed: {
      // スプレッド演算子
      // https://qiita.com/akisx/items/682a4283c13fe336c547
      ...mapState(['items'])
    }
  }
</script>
