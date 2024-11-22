<template>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">{{ subtitle }}</h6>
        <p class="card-text">{{ text }}</p>
        <a href="#" class="card-link">Saiba mais</a>
        <a href="#" class="card-link" @click.prevent="closeCard">Fechar</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
    methods: {
      closeCard() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-top: 20px;
  }
  </style>
  