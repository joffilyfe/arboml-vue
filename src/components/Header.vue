<template>
  <div class="header-content">
    <div class="center">
      <img src="../assets/images/logo.png" alt="" class="img-logo">
    </div>
      <h1>Triagem com o auxílio de Machine Learning</h1>
  </div>
</template>
<script>
  export default {
    name: 'header'
  }
</script>
<style>
  .header-content {
    min-height: 300px;
    background-color: #032728;
  }

  h1 {
    padding: 5% 0;
    color: #64bdb4;
    text-align: center;
  }

  .center {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .img-logo {
    width: 50%;
    margin-top: 5%;
  }
</style>