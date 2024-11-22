import { createRouter, createWebHistory } from 'vue-router';
import IndicadoresView from '../views/IndicadoresView.vue'; // Adicionado

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/indicadores', // Nova rota
      name: 'indicadores',
      component: IndicadoresView,
    },
  ],
});

export default router;
