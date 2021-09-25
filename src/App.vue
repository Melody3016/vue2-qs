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
            background-color="#545c64"
            text-color="#fff"
          >
            <el-submenu index="1">
              <template slot="title">基础部分</template>
              <router-link to="/" v-slot="{ navigate }">
                <el-menu-item index="1-1" @click="navigate">响应式测试</el-menu-item>
              </router-link>
              <router-link to="/test2" v-slot="{ navigate }">
                <el-menu-item index="1-2" @click="navigate">冒泡测试</el-menu-item>
              </router-link>
              <router-link to="/test3" v-slot="{ navigate }">
                <el-menu-item index="1-3" @click="navigate">生命周期</el-menu-item>
              </router-link>
              <router-link to="/test4" v-slot="{ navigate }">
                <el-menu-item index="1-4" @click="navigate">lazy修饰符测试</el-menu-item>
              </router-link>
              <router-link to="/test5" v-slot="{ navigate }">
                <el-menu-item index="1-5" @click="navigate">非prop的attribute测试</el-menu-item>
              </router-link>
              <router-link to="/test6" v-slot="{ navigate }">
                <el-menu-item index="1-6" @click="navigate">自定义事件名测试</el-menu-item>
              </router-link>
              <router-link to="/test7" v-slot="{ navigate }">
                <el-menu-item index="1-7" @click="navigate">组件使用v-model</el-menu-item>
              </router-link>
              <router-link to="/test8" v-slot="{ navigate }">
                <el-menu-item index="1-8" @click="navigate">.sync修饰符测试</el-menu-item>
              </router-link>
              <router-link to="/test10" v-slot="{ navigate }">
                <el-menu-item index="1-9" @click="navigate">子传父测试</el-menu-item>
              </router-link>
              <router-link to="/test14" v-slot="{ navigate }">
                <el-menu-item index="1-10" @click="navigate">tabs过渡测试</el-menu-item>
              </router-link>
              <router-link to="/test15" v-slot="{ navigate }">
                <el-menu-item index="1-11" @click="navigate">tabs过渡测试2</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">路由相关</template>
              <router-link to="/test9" v-slot="{ navigate }">
                <el-menu-item index="2-1" @click="navigate">路由缓存测试</el-menu-item>
              </router-link>
              <router-link to="/test11" v-slot="{ navigate }">
                <el-menu-item index="2-2" @click="navigate">编程式路由导航</el-menu-item>
              </router-link>
              <router-link to="/test12" v-slot="{ navigate }">
                <el-menu-item index="2-3" @click="navigate">滚动行为测试</el-menu-item>
              </router-link>
              <router-link to="/test13" v-slot="{ navigate }">
                <el-menu-item index="2-4" @click="navigate">导航故障测试</el-menu-item>
              </router-link>
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
