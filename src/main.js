import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify'
import config from './amplifyconfiguration.json';

Amplify.configure(config);

createApp(App).use(router).mount('#app')
