<template>
    <router-view />
    <!-- <Home :id=2 /> -->
</template>

<script>
import Loggin from '@/pages/loggin/Loggin.vue'
import Register from './pages/register/Register.vue';
import Home from './pages/Doctor/Home.vue'

export default {
    name: 'App',
    components: {
    Loggin,
    Register,
    Home
}
}
</script>

<style scoped>

/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */


</style>
