import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import MasonryWall from '@yeger/vue-masonry-wall';

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
vue.use(MasonryWall);
vue.use(router);

const selector = '#app';
vue.mount(selector);

declare global {
  interface Window {
    key: string;
  }
}
