<template>
  <div>
    <button @click="clickHandler">路由跳转</button>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter

export default {
  beforeRouteLeave (to, from, next) {
    next(false)
  },
  methods: {
    clickHandler() {
      this.$router.push('/test12').catch(failure => {
        if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
          // 向用户显示一个小通知
          console.log(1123)
        }
      })
    }
  }
}
</script>

<style>

</style>
