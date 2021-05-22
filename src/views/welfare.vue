<template>
  <div class="waterfall" @click="imgClick">
    <div class="leftwrap">
      <div v-for="(item, index) in leftData" :key="index" class="flexItem">
        <img alt="图片" :key="index" v-lazy="item" :loading="loading" />
      </div>
    </div>
    <div class="rightwrap">
      <div v-for="(item, index) in rightData" :key="index" class="flexItem">
        <img alt="图片" :key="index" v-lazy="item" :loading="loading" />
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { getGirls } from '../network/getGirls'
import { mixin } from '../mixin/index'
export default {
  name: "welfare",
  mixins:[mixin],
  data() {
    return {
      leftData: [],
      rightData: [],
      type: 'pop',
      page: 1,
      loading: require('../assets/404.png')
    }
  },
  created() {
    this.prevTime = Date.now()
    this.loadImg()
    document.addEventListener('scroll', this.throttle)
  },
  methods: {
    imgClick(e) { //点击查看图片
      ImagePreview([e.target.src])
    },
    loadImg() { //发送请求加载更多图片
      getGirls(this.type, this.page).then(res => {
        res.data = res.data.data
        let count = 0
        for (let item of res.data.list) {
          if (count < res.data.list.length / 2) {
            this.leftData.push(item.show.img)
            count++
          } else {
            this.rightData.push(item.show.img)
          }
        }
        this.page++
        if (this.page === 10) {
          this.type = "new"
          this.page = 1
        }
        this.$forceUpdate()
      }).catch(err => {})
    },
    scrollHandler() { 
      const html = document.documentElement
      const bottom = html.scrollHeight - html.scrollTop - html.clientHeight
      if (bottom < 900) {
        this.loadImg()
      }
    }
  },
  activated() { //激活时回到原先的位置
    document.documentElement.scrollTop = this.$store.state.scrollY
    document.addEventListener('scroll', this.throttle)
  },
  deactivated(){  //离开时移除滚动事件监听
    document.removeEventListener('scroll', this.throttle)
  }
}
</script>

<style>
.waterfall {
  display: flex;
  flex-direction: row;
  padding: 5px;
  overflow: visible;
}
.waterfall .leftwrap {
  margin-right: 5px;
  display: flex;
  flex-direction: column;
}
.waterfall img {
  display: block;
  width: 100%;
  height: 100%;
}
.flexItem {
  margin-bottom: 5px;
}
</style>