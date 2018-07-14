<template>
  <div>
    <div>
      <ol>
        <!-- 同じ値になる -->
        <li>{{ computedData }}</li>
        <li>{{ computedData }}</li>
      </ol>
      <ol>
        <!-- 違う値になる -->
        <li>{{ methodsData() }}</li>
        <li>{{ methodsData() }}</li>
      </ol>
    </div>
    <div>
      <input v-model.number="budget">円以下に絞り込む
      <input v-model.number="limit">件を表示
      <button @click="order=!order">切り替え</button>
      <p>{{ matched.length }}件中{{ limited.length }}件を表示中</p>
      <ul>
        <li v-for="item in limited" :key="item.id">
          {{ item.name }} {{ item.price }}円
        </li>
      </ul>
    </div>
    <div>
      <select v-model="current">
        <option v-for="topic in topics" :value="topic.value" :key="topic.id">
          {{ topic. name }}
        </option>
      </select>
      <div v-for="item in list2" :key="item.id">{{ item.full_name }}</div>
    </div>
    <div>
      <p>{{ price | localNum }}</p>
      <p>180度は {{ 180 | radian | round }}ラジアンだよ</p>
    </div>
    <div>
      <button @click="video1=true">再生</button>
      <button @click="video1=false">停止</button>
      <video src="https://embed.ted.com/talks/renzo_piano_the_genius_behind_some_of_the_world_s_most_famous_buildings/up-next" v-video="video1"></video>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      budget: 300,
      limit: 2,
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなん', price: 200 },
        { id: 3, name: 'いちご', price: 400 },
        { id: 4, name: 'おれんじ', price: 300 },
        { id: 5, name: 'めろん', price: 500 }
      ],
      order: false,
      list2: [],
      current: '',
      topics: [
        {value: 'vue', name: 'Vue.js'},
        {value: 'jQuery', name: 'jQuery'}
      ],
      price: 19800
    }
  },
  // メソッドとの大きな違いとして、リアクティブな依存データに基づき結果をキャッシュする
  computed: {
    computedData: function () {
      return Math.random()
    },
    matched: function () {
      return this.list.filter(function (el) {
        return el.price <= this.budget
      }, this)
    },
    limited: function () {
      return this.sorted.slice(0, this.limit)
    },
    sorted: function () {
      return ''
      // return _.orderBy(this.matched(), 'price', this.order ? 'desc' : 'asc')
    }
  },
  methods: {
    methodsData: function () {
      return Math.random()
    }
  },
  // データを監視して処理を自動化
  watch: {
    current: function (val) {
      // これが使えないって書いてある
      axios.get('https://api.github.com/search/repositories', {
        params: {q: 'topic:' + val}
      }).then(function (response) {
        this.list = response.data.items
      }.bind(this))
    },
    list: function () {
      // 仮想DOMによって非同期にDOMが更新されるため、データを更新してすぐにDOMにアクセスしても取得できない
      console.log('通常:', this.$refs.list.offsetHeight)
      // nextTickを使えばできる
      this.$nextTick(function () {
        console.log('nextTick:', this.$refs.list.offsetHeight)
      })
    }
  },
  filters: {
    localNum: function (val) {
      return val.toLocaleString()
    },
    round: function (val) {
      return Math.round(val * 100) / 100
    },
    radian: function (val) {
      return val * Math.PI / 180
    }
  },
  directives: {
    video (el, binding) {
      if (binding.value !== binding.oldValue) {
        binding.value ? el.play() : el.pause()
      }
    }
  }
}
</script>
