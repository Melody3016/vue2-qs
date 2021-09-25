<template>
  <div id="app">
    <el-container>
      <el-header height="">
        <h1 class="title">Vue Study</h1>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            :default-openeds="['1']"
            :unique-opened="true"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
          >
            <el-submenu index="1">
              <template slot="title">基础部分</template>
              <el-menu-item index="/">响应式测试</el-menu-item>
              <el-menu-item index="/test2">冒泡测试</el-menu-item>
              <el-menu-item index="/test3">生命周期</el-menu-item>
              <el-menu-item index="/test4">lazy修饰符测试</el-menu-item>
              <el-menu-item index="/test5">非prop的attribute测试</el-menu-item>
              <el-menu-item index="/test6">自定义事件名测试</el-menu-item>
              <el-menu-item index="/test7">组件使用v-model</el-menu-item>
              <el-menu-item index="/test8">.sync修饰符测试</el-menu-item>
              <el-menu-item index="/test10">子传父测试</el-menu-item>
              <el-menu-item index="/test14">tabs过渡测试</el-menu-item>
              <el-menu-item index="/test15">tabs过渡测试2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">路由相关</template>
              <el-menu-item index="/test9">路由缓存测试</el-menu-item>
              <el-menu-item index="/test11">编程式路由导航</el-menu-item>
              <el-menu-item index="/test12">滚动行为测试</el-menu-item>
              <el-menu-item index="/test13">导航故障测试</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">Vuex相关</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  .title {
    margin: 15px 20px;
  }
}

.el-container, .el-menu{
  height: 100%;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
}
.el-aside {
  height: 100%;
  min-width: 220px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 100%;
}
</style>
