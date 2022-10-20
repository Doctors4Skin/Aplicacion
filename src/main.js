import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

//createApp(App).mount('#app')

const app = createApp(App);

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Password', Password)

app.mount('#app');