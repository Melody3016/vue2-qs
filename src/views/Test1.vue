<template>
  <div class="container">
    <button @click="clickHandle">改变</button>
    <div class="box">
      haha
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  data() {
    return {
      msg: {
        a: 1
      }
    }
  },
  watch: {
    msg: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true
    }
  },
  methods: {
    clickHandle() {
      this.msg.a = 2
      // this.msg.b = 3
      this.$set(this.msg, 'b', 3)
    }
  }
}
</script>

<style scoped>

  .box {
    min-width: 100px;
  }
</style>
