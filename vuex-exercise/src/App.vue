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
  import Item from './Item.vue';
  export default {
    name: 'app',
    components: { Item },
    data () {
      return {
        inputTitle: "",
        items: [
          {is_do: false, title: 'タスク1'},
          {is_do: true, title: 'タスク2'},
          {is_do: false, title: 'タスク3'}
        ]
      }
    },
    methods: {
      addItem() {
        this.items.push({
          title: this.inputTitle,
          is_do: false
        });
      }
    }
  }
</script>
