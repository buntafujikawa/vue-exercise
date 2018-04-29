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
    bobby: {
      first: 'Bobby',
      last: 'Boone',
      age: 25
    },
    john: {
      first: 'John',
      last: 'Bobby',
      age: 35
    }
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
  template: `
    <div>
        <h2>Name: {{john | fullName}}</h2>
        <h2>Age: {{john.age | ageInOneYear}}</h2>
        <h2>Name: {{bobby | fullName}}</h2>
        <h2>Age: {{bobby.age | ageInOneYear}}</h2>
    </div>
`
})
