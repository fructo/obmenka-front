import { createRouter, createWebHistory } from 'vue-router';
import ExchangeForm from '../components/ExchangeForm.vue';
import ExchangeTab from '../components/ExchangeTab.vue';
import ExchangeTab1 from '../components/ExchangeTab1.vue';
import ExchangeRates from '../components/ExchangeRates.vue';

const routes = [
  { path: '/', component: ExchangeForm },
  { path: '/exchange', component: ExchangeTab },
  { path: '/exchange1', component: ExchangeTab1 },
  { path: '/rates', component: ExchangeRates },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
