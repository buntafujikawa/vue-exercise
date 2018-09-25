<script>
  export default {
    data () {
      return {
        level: 2,
        slots: 'hoge'
      }
    },
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // タグ名
        this.slots
      )
    },
    // props: {
    //   level: {
    //     type: Number,
    //     required: true
    //   }
    // }
  }
</script>
