import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  // タイプミスなどで不用意にステートを変更しても警告がでないので、開発中はstrictモードを利用する
  strict: process.env.NODE_ENV !== 'production',
  state: {
    items: [
      {is_do: false, title: 'タスク1'},
      {is_do: true, title: 'タスク2'},
      {is_do: false, title: 'タスク3'}
    ]
  },
  // データの加工や非同期処理を行い、その結果をミューテーションへコミットする
  actions: {
    [types.ADD_TASK] ({ commit }, title) {
      let newItem = {
        title: title,
        is_do: false
      }
      commit( types.ADD_TASK, {
        data: newItem
      })
    },
    [types.DONE_TASK] ({ commit }, item) {
      commit( types.DONE_TASK, {
        data: item
      })
    }
  },
  mutations: {
    // 引数として取れるのはstateとpayloadの2つ、payloadはコミットからの引数
    [types.ADD_TASK] (state, payload) {
      state.items.push(payload.data);
    },
    [types.DONE_TASK] (state, payload) {
      let index = state.items.indexOf(payload.data)
      state.items[index].is_do = !payload.data.is_do
    }
  },
});
