// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

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
  computed: {
    // bobbyFullName () {
    //   return `${this.bobby.first} ${this.bobby.last}`
    // },
    // johnFullName () {
    //   return `${this.john.first} ${this.john.last}`
    // },
    // johnAgeInOneYear () {
    //   return this.john.age + 1
    // }
  },
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
      <!--<h2>Name: {{john | fullName}}</h2>-->
      <!--<h2>Age: {{john.age | ageInOneYear}}</h2>-->
      <!--<h2>Name: {{bobby | fullName}}</h2>-->
      <!--<h2>Age: {{bobby.age | ageInOneYear}}</h2>-->
      <h2 v-for="friend in friends">
        <h4>{{friend | fullName}}</h4>
        <h5>age: {{friend.age}}</h5>
        <button v-on:click="decrementAge(friend)">-</button>
        <button v-on:click="incrementAge(friend)">+</button>
        <input v-model="friend.first"/>
        <input v-model="friend.last"/>
      </h2>
    </div>
`
})
