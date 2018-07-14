<template>
  <div class="chapter2">
    <div>
      <p>{{ message.value }}</p>
      <p>{{ message.value.length }}</p>
      <p>{{ message.value.length >= 10 ? '10文字以上' : '10文字未満' }}</p>
    </div>
    <div>
      <input type="text" v-bind:value="message">
      <input type="text" :value="message">
    </div>
    <div>
      <p>{{ count }}回クリックした</p>
      <button v-on:click="increment">カウントを増やす</button>
    </div>
    <div>
      <p v-bind:class="{ child: isChild, 'is-active': isActive }">Text</p>
      <p v-bind:style="{ color: textColor, backgroundColor: bgColor }">Text</p>
      <img v-bind="item" v-bind:id="'thumb-' + item.id">
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink"/>
        <input type="range" min="0" max="100" v-model="radius">
      </svg>
    </div>
    <div v-if="ok">falseの場合はコメント化される</div>
    <div v-show="ok">falseの場合はdisplay noneと同じ</div>
    <div>
      <p ref="hello">Hello</p>
    </div>
  </div>
</template>

<script>
export default {
  // コンポーネント名は常に複数単語
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Chapter2',
      message: {
        value: 'オブジェクトデータ'
      },
      count: 0,
      isChild: true,
      isActive: true,
      textColor: 'red',
      bgColor: 'lightgray',
      item: {
        id: 1,
        src: 'item1.jpg'
      },
      radius: 50
    }
  },
  methods: {
    increment: function () {
      this.count += 1
    }
  },
  mounted: function () {
    // DOMを直接参照する
    console.log(this.$el)
    console.log(this.$refs.hello)
  },
  created: function () {
    this.item.forEach(function (item) {
      // item.active = falseはできない
      // 配列インデックスを使った更新に使う
      this.$set(item, 'active', false)
    })
  }
}
</script>
