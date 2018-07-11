import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {is_do: false, title: 'タスク1'},
      {is_do: true, title: 'タスク2'},
      {is_do: false, title: 'タスク3'}
    ]
  }
});
