export const mixin = {
  data() {
    return {
      prevTime: 0
    }
  },
  methods: {
    throttle() { //滚动事件的节流处理
      const now = Date.now()
      if (now - this.prevTime > 300) {
        this.scrollHandler()
        this.prevTime = now
      }
    },
    backTop() {  //让滚动条回到顶部
      document.documentElement.scrollTop = 0
    },
    loadMore() { //加载更多数据
      const now = Date.now()
      if (now - this.prevTime > 300) {
        const html = document.documentElement
        const bottom = html.scrollHeight - html.scrollTop - html.clientHeight
        if (bottom < 500) {
          this.cardData.push(...this.cardData.slice(0,10))
        }
        this.prevTime = now
      }
    }
  }
}