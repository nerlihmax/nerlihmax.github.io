import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Resume from '../views/Resume.vue';

const routeInfos = [
  {
    path: '/',
    component: About,
    name: 'Обо мне',
  },
  {
    path: '/resume',
    component: Resume,
    name: 'Резюме',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos,
});

export default router;
