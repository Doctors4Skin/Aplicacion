<template>
  <LoginPage />
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InitialPage from './modules/InitialPage/pages/InitialPage.vue';
import LoginPage from './modules/Patients/pages/LoginPage.vue';
import Register from './modules/Patients/pages/Register.vue';

export default {
  name: 'App',
  components: {
    InitialPage,
    LoginPage,
    Register
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
