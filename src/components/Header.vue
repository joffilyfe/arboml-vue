<template>
  <div class="header-content">
    <div class="center">
      <b-img :src="image" fluid-grow class="img-logo"></b-img>
    </div>
      <h1>Triagem com o auxílio de Machine Learning</h1>
  </div>
</template>
<script>
  import image from '../assets/images/logo.png'

  export default {
    name: 'header',
    data() {
      return {
        image
      }
    }
  }
</script>
<style>
  /* HEADER */
  .header-content {
    min-height: 300px;
    background-color: #032728;
  }

  h1 {
    padding-bottom: 5%;
    color: #64bdb4 !important;
    text-align: center;
  }

  .center {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .img-logo {
    padding: 5% 20%;
  }
</style>