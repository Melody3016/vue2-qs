<template>
  <div class="container">
    <button @click="clickHandle">路由跳转</button>
  </div>
</template>

<script>
export default {
  name: 'Test11',
  methods: {
    clickHandle() {
      // const userId = 123
      // this.$router.push('test9/test91')
      // this.$router.push('/test9/test91')
      // this.$router.push({ path: 'test9/test91' })
      // this.$router.push({ path: '/test9/test91' })
      // this.$router.push({ name: 'Test2', params: { userId } })
      // const result = this.$router.push({ path: 'test11' },
      //   function() {
      //     console.log('成功')
      //   },
      //   function() {
      //     console.log('终止')
      //   }
      // )
      // console.log(result)
      this.$router.push({ name: 'Test2', query: { userId: 123 } })
    }
  }
}
</script>

<style scoped>

  .box {
    min-width: 100px;
  }
</style>
