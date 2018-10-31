<template>
<div class="content">
  <b-container>
    <b-row>
      <b-col lg="4" md="12" sm="12" class="border-right info-content">
        <h2>O que é o ArboML?</h2>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
      </b-col>
      <b-col lg="5" md="12" sm="12" class="border-right info-content">
        <h2>Informe os seus sintomas</h2>
        <div>Selecione um algoritmo de classificação</div>
        <b-form-select v-model="selected" :options="options" class="mb-3" size="sm" />
        <hr>
        <b-form-group>
          <b-form-checkbox-group stacked v-model="selected" name="sintomas" :options="options">
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
      <b-col lg="3" md="12" sm="12" class="info-content">
        <h2>Resultado da predição</h2>
        <h4>Dengue: {{dengue}}%</h4>
        <h3 class="bigger">Chikungunya: {{chikungunya}}%</h3>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'content',
  data() {
    return {
      options: [
        {text: 'sintoma 1', value: 'sintoma1'},
        {text: 'sintoma 2', value: 'sintoma2'},
        {text: 'sintoma 3', value: 'sintoma3'},
        {text: 'sintoma 4', value: 'sintoma4 '},
        {text: 'sintoma 5', value: 'sintoma5'},
        {text: 'sintoma 6', value: 'sintoma6'},
        {text: 'sintoma 7', value: 'sintoma7'},
        {text: 'sintoma 8', value: 'sintoma8'}
      ],
      dengue: 29.95,
      chikungunya: 70.04
    }
  }
}
</script>

<style>
  .content {
    height: 100%;
  }

  h2 {
    font-weight: bold !important;
    margin-bottom: 10% !important;
  }

  .info-content {
    padding: 5% 0;
  }

  .bigger {
    color: #64bdb4;
    font-size: 40px;
    font-weight: bold;
  }
</style>