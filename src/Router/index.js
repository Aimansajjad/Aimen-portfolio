import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.vue';

const routes = [
   { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  AOS.refresh()
})

export default router;