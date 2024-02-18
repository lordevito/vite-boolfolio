import { createApp } from 'vue';
//importo style
import './scss/style.scss';
//importo bootstrap
import * as bootstrap from 'bootstrap';

import { router } from './router';

import App from './App.vue'

createApp(App).use(router).mount('#app')
