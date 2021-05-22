<template>
  <a :href="data.url" target="_blank">
    <div class="card">
      <img :src="data.src" alt="描述图" />
      <div class="card-content">
        <div class="desc">{{ data.desc }}</div>
        <div class="card-content-bottom">
          <div class="author">{{ data.who }}</div>
          <div class="time">{{ this.dateFormat(data.createdAt) }}</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    dateFormat(date) {
      let arr = date.split('')
      arr = arr.slice(0, 10)
      return arr.join('')
    }
  }

}
</script>

<style>
a {
  color: #7e8c8d;
  text-decoration: none;
}
.card {
  position: relative;
  width: 100%;
  max-height: 200px;
  min-height: 200px;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgb(34 25 25 / 40%);
}
.card img {
  width: 100%;
}
.card .card-content {
  position: absolute;
  width: 90%;
  height: auto;
  max-height: 95px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px 5%;
}
.card .card-content .desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.card .card-content-bottom {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 28px;
}
</style>