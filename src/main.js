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
  template: '<App/>'
})

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   data: {
//     editFriend: null,
//     friends: []
//   },
//   methods: {
//     deleteFriend (id, i) {
//       fetch('http://rest.learncode.academy/api/vue-5/friends' + id, {
//         method: 'DELETE'
//       })
//         .then(() => {
//           this.friends.splice(i, 1)
//         })
//     },
//     updateFriend (friend) {
//       fetch('http://rest.learncode.academy/api/vue-5/friends' + friend.id, {
//         body: JSON.stringify(friend),
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then(() => {
//           this.editFriend = null
//         })
//     }
//   },
//   mounted: function () {
//     fetch('http://rest.learncode.academy/api/vue-5/friends')
//       .then(response => response.json())
//       .then((data) => {
//         this.friends = data
//       })
//   },
//   template: `
//     <div>
//       <li v-for="friend, i in friends">
//         <div v-if="editFriend === friend.id">
//           <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
//           <button v-on:click="updateFriend(friend)">save</button>
//         </div>
//         <div v-else>
//           <button v-on:click="editFriend = friend.id">edit</button>
//           <button v-on:click="deleteFriend(friend.id, i)">x</button>
//           {{friend.name}}
//         </div>
//       </li>
//     </div>
// `
// })
