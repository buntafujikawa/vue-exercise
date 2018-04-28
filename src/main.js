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
      name: 'Bobby Bone',
      age: 25
    },
    john: {
      name: 'John Bobby',
      age: 35
    }
  },
  template: `
    <div>
        <h2>Name: {{john.name}}</h2>
        <h2>Age: {{john.age}}</h2>
        <h2>Name: {{bobby.name}}</h2>
        <h2>Age: {{bobby.age}}</h2>
    </div>
`
})
