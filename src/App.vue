<template>
  <div id="app">
    <div class="page-cover" v-show="isShow" @click="coverClick"></div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
export default {
  name: 'app',
  components: {
    NavBar,
    SideBar
  },
  methods: {
    coverClick() { //点击遮罩层时 侧边导航隐藏
      this.$store.commit('changeShow', false)
    }
  },
  computed: {
    isShow() {
      return this.$store.state.isShow
    },
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
#app .page-cover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
</style>
