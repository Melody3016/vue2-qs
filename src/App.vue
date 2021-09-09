<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">响应式测试</router-link> |
      <router-link to="/test2">冒泡测试</router-link> |
      <router-link to="/test3">生命周期</router-link> |
      <router-link to="/test4">lazy修饰符测试</router-link> |
      <router-link to="/test5">非prop的attribute测试</router-link> |
      <router-link to="/test6">自定义事件名测试</router-link> |
      <router-link to="/test7">组件使用v-model</router-link> |
      <router-link to="/test8">.sync修饰符测试</router-link> |
      <router-link to="/test9">路由缓存测试</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  /* mounted() {
    console.log('mounted1')
  },
  created : [
    function() {
      console.log('mounted2')
    },
    function() {
      console.log('mounted3')
    }
  ] */
}
/* eslint-enable */
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
