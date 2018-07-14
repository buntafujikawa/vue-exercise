<template>
  <div class="chapter2">
    <div>
      <p>{{ count }}</p>
      <button @click="count++">クリック</button>
    </div>
    <div>
      <input :value="massage"  v-on:input="handleInput">
      <input @click.enter="clickEnter">
      <!-- https://jp.vuejs.org/v2/guide/events.html#%E3%82%AD%E3%83%BC%E4%BF%AE%E9%A3%BE%E5%AD%90 -->
    </div>
    <div>
      <textarea v-model="message"></textarea>
      <pre>{{ message }}</pre>
      <lavel>
        <input type="checkbox" v-model="val"> {{ val }}
      </lavel>
      <label><input type="checkbox" v-model="val2" value="A">A</label>
      <label><input type="checkbox" v-model="val2" value="B">B</label>
      <label><input type="checkbox" v-model="val2" value="C">C</label>
      <p>{{ val2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      message: 'Hello',
      val: true,
      val2: []
    }
  },
  methods: {
    handleInput: function (event) {
      // 代入前に何か処理を行う
      this.message = event.target.value
    },
    clickEnter: function () {
      alert('enter')
    }
  }
}
</script>
