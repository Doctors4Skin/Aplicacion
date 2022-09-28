import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'            


const app = createApp(App)
app.use(PrimeVue)

app.component('Toolbar', Toolbar)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Password', Password)


app.mount('#app')

//createApp(App).use(PrimeVue).mount('#app')
