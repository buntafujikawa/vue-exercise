<template>
  <div class="chapter1">
    <h1>{{ msg }}</h1>
    <ol>
      <li v-for="item in list" :key="item.id">{{ item }}</li>
    </ol>
    <button v-on:click="show=!show">切り替え</button>
    <transition>
      <p v-if="show">Hello Vue.js!</p>
    </transition>
  </div>
</template>

<script>
export default {
  // コンポーネント名は常に複数単語
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Chapter1',
      list: ['aaa', 'bbb', 'ccc'],
      show: true,
    }
  },
  // 関数によって算出されたデータ
  computed: {
    computedMessage: function () {
      return this.msg + '!'
    }
  }
}
</script>

<style>
  <!-- transitionタグで囲んだ要素に対してCSSを定義 -->
  .v-enter-active, .v-leave-active {
    transition: opacity 1s;
  }
  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>
