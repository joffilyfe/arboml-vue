<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Content from './Content.vue'

  export default {
    name: 'index',
    components: {
      Header,
      Content
    }
  }
</script>

<style scoped>
</style>
