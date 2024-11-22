<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="menu-lateral bg-light">
    <ul class="nav flex-column p-3">
      <li class="nav-item">
        <RouterLink class="nav-link text-dark" to="/indicadores">Indicadores</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-dark" to="/indicadores">Indicadores Economico</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-dark" to="/servicos">IPCA Historico</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.menu-lateral {
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  border-right: 1px solid #040458;
  background-color: #143f6a;
  
}
</style>
