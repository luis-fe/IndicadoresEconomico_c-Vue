<script setup>
import MenuLateral from './components/MenuLateral.vue';
import Topo from './components/Topo.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app" class="container-fluid">
    <div class="row">
      
      <!-- Menu Lateral -->
      <div class="col-auto px-0">
        <MenuLateral />
      </div>

      <!-- Área Principal -->
      <div class="col ms-auto px-0">
        <!-- Topo -->
        <Topo />

        <!-- Conteúdo Principal -->
        <main class="p-4 d-flex justify-content-center">
          <div class="content-wrapper">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
/* Limita a largura do conteúdo principal */
.content-wrapper {
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
