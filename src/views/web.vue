<template>
  <div class="wrapper">
    <div v-for="(item, index) in cardData" :key="index">
      <card :data="item"></card>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card/Card'
import { getCard } from '../network/getCard'
import { mixin } from '../mixin/index'
export default {
  name: 'web',
  mixins: [mixin],
  data() {
    return {
      cardData: []
    }
  },
  components: {
    Card
  },
  created() { //发送请求获取数据
    getCard('web').then(res => {
      this.cardData = res.data
    })
  },
  activated() {
    this.backTop() //激活时回到顶部
    document.addEventListener('scroll', this.loadMore)
  },
  deactivated() { //离开时移除滚动监听
    document.addEventListener('scroll', this.loadMore)
  }
}
</script>

<style>
.wrapper {
  padding: 15px 15px 100px 15px;
  background: cornsilk;
}
</style>