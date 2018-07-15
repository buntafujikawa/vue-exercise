<template>
  <div>
    <ul>
      <child v-for="item in list"
        :key="item.id"
        v-bind="item"
        @attack="handleAttack"></child>
    </ul>
    <child-slot>
      <header slot="header">
        Hello Vue.js
      </header>
      <p slot-scope="props">
        スロットから受け取ったtext = {{ props.text }}
      </p>
    </child-slot>
  </div>
</template>

<script>
import Child from './Child'
import ChildSlot from './ChildSlot'
import Mixin from './Mixin'

export default {
  components: {
    Child,
    ChildSlot
  },
  data () {
    return {
      list: [
        { id: 1, name: 'りんご', hp: 100 },
        { id: 2, name: 'りんご2', hp: 200 },
        { id: 3, name: 'りんご3', hp: 400 }
      ]
    }
  },
  methods: {
    handleAttack: function (id) {
      let item = this.list.find(function (el) {
        return el.id === id
      })
      if (item !== undefined && item.hp > 0) item.hp -= 10
    },
    refs: function () {
      this.$refs.child.$emit('open')
    }
  },
  /*
  共通処理を登録する
  data,methods,computedなどのオプションが重複している場合にはコンポーネントの定義が優先
  createdなどのフック関数が重複している場合にはミックス員のフックから先に全てのフックが呼び出される
   */
  mixin: [Mixin]
}
</script>
