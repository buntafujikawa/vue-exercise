<template>
  <div>
    <li>{{ name }} HP.{{ hp }}
      <button @click="doAttack">攻撃する</button>
    </li>
  </div>
</template>

<script>
export default {
  //
  props: {
    id: Number,
    name: {
      type: String
      // required: true
    },
    hp: {
      type: Number,
      default: 100
    }
  },
  methods: {
    doAttack: function () {
      // 親が持つデータを操作する
      this.$emit('attack', this.id)
    }
  },
  created: function () {
    this.$on('open', function () {
      console.log('$refsで子コンポーネントを参照する')
    })
  }
}
</script>
