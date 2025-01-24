import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { themes } from '@/utils/config/prime-vue';
import PrimeVue from 'primevue/config';

import router from './router';
import app from './App.vue';
import './main.css';

const vue = createApp(app);

vue.use(createPinia().use(piniaPluginPersistedstate));
vue.use(PrimeVue, {
  theme: { preset: themes },
});
vue.use(router);

const selector = '#app';
vue.mount(selector);
