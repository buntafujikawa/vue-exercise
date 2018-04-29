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
    friends: ['Jack', 'John']
  },
  mounted: function () {
    fetch('http://rest.learncode.academy/api/vue-5/friends')
      .then(response => response.json())
      .then((data) => {
        this.friends = data
      })
  },
  template: `
    <div>
      <li v-for="friend in friends">{{friend.name}}</li>
    </div>
`
})
