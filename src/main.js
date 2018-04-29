// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('friend-cpmponent', {
  props: ['friend'],
  filters: {
    ageInOneYear (age) {
      return age + 1
    },
    fullName (value) {
      return `${value.first} ${value.last}`
    }
  },
  methods: {
    decrementAge (friend) {
      friend.age = friend.age - 1
    },
    incrementAge (friend) {
      friend.age = friend.age + 1
    }
  },
  template: `
    <div>
      <h4>{{friend | fullName}}</h4>
      <h5>age: {{friend.age}}</h5>
      <button v-on:click="decrementAge(friend)">-</button>
      <button v-on:click="incrementAge(friend)">+</button>
      <input v-model="friend.first"/>
      <input v-model="friend.last"/>
    </div>
  `
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  data: {
    friends: [
      {
        first: 'Bobby',
        last: 'Boone',
        age: 25
      },
      {
        first: 'John',
        last: 'Bobby',
        age: 35
      }
    ]
  },
  template: `
    <div>
    <!-- vue componsetを指定している-->
      <friend-cpmponent v-for="item in friends" v-bind:friend="item"/>
    </div>
`
})
