<template>
  <div class="dayWrapper">
    <van-tabs
      v-model="active"
      animated
      title-active-color="#03a9f4"
      line-height="0"
      line-width="0"
      sticky
      offset-top="50"
    >
      <van-tab v-for="(title, index) in titles" :key="title" :title="title">
        <h1>今日力推：全部干货</h1>
        <div class="dayContent" v-html="articleData[index]"></div>
        <div class="bottom"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getDay } from '../network/getDay'
export default {
  name: "day",
  data() {
    return {
      active: 0,
      titles: ["今天", "昨天", "前天", "三天前", "四天前"],
      articleData: [],
      dataIndex: 0
    }
  },
  created() { //获取数据
    getDay().then(res => {
      for (let item of res.data.results) {
        this.articleData.push(this.htmlDecode(item.content))
      }
    })
  },
  mounted() {
    this.touchMove() //添加滑动事件监听
  },
  methods: {
    touchMove() { //判断滑动的方向 切换标签
      let startY, startX, endY, endX, startTime, endTime
      let that = this
      const tabsWrapper = document.getElementsByClassName('dayWrapper')[0]
      tabsWrapper.addEventListener('touchstart', function (e) {
        console.log(e);
        startY = e.targetTouches[0].pageY;
        startX = e.targetTouches[0].pageX;
        startTime = e.timeStamp
      })
      tabsWrapper.addEventListener('touchend', function (e) {
        console.log(e);
        endY = e.changedTouches[0].pageY;
        endX = e.changedTouches[0].pageX;
        endTime = e.timeStamp
        if (endX - startX > 50 && endX - startX > endY - startY && endTime - startTime < 1000) {
          that.active--
        } else if (endTime - startTime < 1000 && endX - startX < -50) {
          that.active++
        }
      })
    },
    htmlDecode(text) { //将content数据内容进行html反转义
      var temp = document.createElement("div");
      temp.innerHTML = text;
      var output = temp.innerText || temp.textContent;
      temp = null;
      return output;
    }
  }
}
</script>

<style>
 .van-tab {
  font-size: 18px;
  transition: all 0.1s ease;
}
 .van-tab--active {
  font-size: 20px;
}
.dayWrapper .dayContent{
  margin-bottom: 50px;
}
.dayWrapper h1{
  text-align: left;
  font-weight: 700;
  font-size: 16px;
  color: #2c3e50;
  line-height: 32px;
  margin: 10px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal !important;
  -webkit-line-clamp: 1;
}
.dayWrapper img{
  width: 100%;
}
.van-sticky--fixed{
  z-index: 1;
}
</style>