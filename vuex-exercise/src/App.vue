<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :item="item"></item>
    </ul>
    <div>
      <input type="text" v-model="inputTitle">
      <button @click="addItem">追加</button>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
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
      addItem() {
        this.items.push({
          title: this.inputTitle,
          is_do: false
        });
      }
    },
    // これでdataにitemsを書く必要がなくなる
    computed: {
      // スプレッド演算子
      // https://qiita.com/akisx/items/682a4283c13fe336c547
      ...mapState(['items'])
    }
  }
</script>
