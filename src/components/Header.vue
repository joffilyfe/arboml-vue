<template>
  <div class="header-content">
      <b-img :src="image" fluid-grow class="img-logo center"></b-img>
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
  .header-content {
    min-height: 300px;
    background-color: #032728;
  }

  h1 {
    padding-bottom: 5%;
    color: #64bdb4 !important;
    text-align: center;
    margin-bottom: 0 !important;
  }

  .center {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .img-logo {
    padding: 5% 20%;
  }

  @media screen and (max-width: 425px){
    h1 {
      padding-bottom: 0;
    }
  }
</style>