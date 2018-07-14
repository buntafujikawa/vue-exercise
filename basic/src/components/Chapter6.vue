<template>
  <div>
    <button @click="show=!show">切り替え</button>
    <!-- nameを指定しないとクラス名がv-となる -->
    <!-- appearを付けると初期描画時にも -->
    <transition appear name="demo">
      <div v-show="show">トランジションさせたい要素</div>
    </transition>
    <div>
      <button @click="order=!order">切り替え</button>
      <transition-group tag="ul" class="list">
        <li v-for="item in sortedList" :key="item.id">
          {{ item.name}}{{ item.price }}円
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true,
      order: false,
      list: [
        {id: 1, name: 'りんご', price: 100},
        {id: 2, name: 'ばなな', price: 200},
        {id: 3, name: 'いちご', price: 300}
      ]
    }
  },
  computed: {
    sortedList: function () {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
}
</script>

<style>
  /*.v-enter-active, .v-leave-active {*/
    /*transition: opacity 1s;*/
  /*}*/
  /*.v-enter, .v-leave-to {*/
    /*opacity: 0;*/
  /*}*/
  .demo-enter-active, .demo-leave-active {
    transition: opacity 1s;
  }
  .demo-enter, .demo-leave-to {
    opacity: 0;
  }
  .v-move {
    transition: transform 1s;
  }
</style>
