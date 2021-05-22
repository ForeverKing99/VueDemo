<template>
  <van-nav-bar
    :title="headerTitle"
    @click-left="onClick"
    @click-right="onClick"
    fixed
    placeholder
  >
    <template #left>
      <van-icon name="wap-nav" size="18" />
    </template>
    <template #right>
      <van-icon name="search" size="20" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    this.$store.commit('changeTitle', this.$route.path.replace('/', ''))
  },
  methods: {
    onClick() {
      this.$store.commit('changeShow', true)
    }
  },
  computed: {
    headerTitle() {
      return this.$store.state.title
    }
  }
}
</script>

<style>
.van-nav-bar__right {
  padding: 0 12px;
}
</style>