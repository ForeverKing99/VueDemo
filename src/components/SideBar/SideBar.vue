<template>
  <div class="menu" :class="{ show: isShow }">
    <div class="menu-header">
      <div class="head-img">
        <img
          src="https://avatars0.githubusercontent.com/u/11735533?v=3&u=02b515725d0e52cdf5f02e2dbdc98c1de3ddbcc2&s=400"
          alt="头像"
        />
      </div>
      <div class="head-text">ForeverKing99</div>
    </div>
    <div class="menu-ul">
      <div v-for="(item, key) in sideLists" :key="key" class="menu-item">
        <a @click="toRouter(key)">
          <div class="icon-wrapper">
            <span class="iconfont" v-html="item.font"></span>
          </div>
          <span class="item-text">{{ item.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeKey: 0,
      sideLists: {
        'welfare': {
          text: '福利',
          font: "&#xe68e;"
        }, 'day': {
          text: '每日推荐',
          font: "&#xe66c;"
        },
        'android': {
          text: 'Andriod',
          font: "&#xe63d;"
        },
        'ios': {
          text: 'IOS',
          font: "&#xe68c;"
        }, 'web': {
          text: '前端',
          font: "&#xe65a;"
        }
      }
    }
  },
  methods: {
    toRouter(key) {
      if ('/' + key === this.$route.path) { //点击相同路由 不进行跳转 但是隐藏侧栏导航
        this.$store.commit('changeShow', false)
      } else {
        this.$store.commit('changeTitle', key)
        this.$router.push(key).catch(e => {})
      }
    },
  },
  computed: {
    isShow() {
      return this.$store.state.isShow
    }
  }
}
</script>

<style>
.van-sidebar-item--select::before {
  width: 0;
}
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #22262a;
  z-index: 3;
  transform: translateX(-250px);
  transition: all 0.3s ease;
}
.menu-header {
  width: 100%;
  height: 180px;
  background-color: #262d30;
}
.head-img img {
  width: 40%;
  height: auto;
  border-radius: 50%;
  margin: 20px 70px;
}
.menu-header .head-text {
  font-size: 14px;
  color: #fff;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
}
.menu-item {
  position: relative;
  font-size: 15px;
  padding: 10px 13px;
  text-align: left;
  text-indent: 1px;
  line-height: 15px;
  color: #a6adb3;
  font-weight: 700;
}
.menu-item:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #40474a;
  width: 100%;
  content: "";
}
.menu-item .item-text {
  display: inline-block;
  font-size: 15px;
  line-height: 32px;
  vertical-align: top;
  margin-left: 15px;
  font-weight: 700;
}
a {
  position: relative;
  display: block;
  color: #a6adb3;
}
.icon-wrapper {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #383c40;
  border-radius: 50%;
}
.icon-wrapper span {
  display: inline-block;
  line-height: 30px;
}
.show {
  transform: translateX(0px);
}
</style>