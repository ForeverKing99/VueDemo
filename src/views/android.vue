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
  name: 'android',
  mixins: [mixin],
  data() {
    return {
      cardData: []
    }
  },
  components: {
    Card
  },
  created() { //获取数据
    getCard('android').then(res => {
      this.cardData = res.data
    })
  },
  activated() {
    this.backTop()
    document.addEventListener('scroll', this.loadMore)
  },
  deactivated() {
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