import Loggin from '@/pages/loggin/Loggin.vue';
<template>
    <img src="https://cdn.discordapp.com/attachments/769430775438376960/1030269000745222144/unknown.png" alt="Doctores"/>
    <!-- <Button label="Inicia sesion" v-on:click="loggin"/> -->
    <div class="container">
        <img src="https://cdn.discordapp.com/attachments/769430775438376960/1029235162539638834/unknown.png" alt="Doctores" class="img2"/>
        <form>
            <h5 style="margin-top: 50px">Usuario</h5>
            <InputText v-model="username" class="input"/>
            <h5>Constrasena</h5>
            <InputText v-model="password" class="input"/>
            <Button label="Iniciar Sesion" v-on:click="loggin" class="button">
                Iniciar Sesion
            </Button>
            <router-link :to="{name: 'Doctor', params: { id: doctorid }}" id="rl"></router-link>
            
            <span style="margin-bottom: 40px">Eres nuevo en Doctors4skin?&nbsp;<router-link :to=" {name: 'register' }"><a>Create una cuenta</a></router-link></span>
    </form>

    </div>

</template>

<script>
import { DoctorServices } from '@/services/DoctorServices'

export default {
    data() {
        return {
            username: '',
            password: '',
            doctorid: 1
        }
    },
    watch: {
        
    },
    methods: {
        async loggin() {
            this.doctorid = await this.doctorServices.validateDoctor(this.username, this.password)
            if(this.doctorid) {
                console.log(this.doctorid)
                this.username = ''
                this.password = ''
                //return true
            }
            console.log('No')
        
            //return false
        }
    },
    created() {
        this.doctorServices = new DoctorServices
    }
}
</script>

<style scoped>

img {
    margin: 10px auto;
    display: block;
    width: 250px;
    margin-top: 5%;
}

form {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: auto; 
    display: flex;
    /* max-width: 450px; */
    border-style: solid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    border-radius: 30px;
}
.button {
    margin: 5%;
    display: block;
    border-radius: 40px;
    width: 40%;
    height: 60px;
}
.input {
    width: 60%;
}
span {
    margin: 1%;
}
.container {
    display: flex;
    width: 60%;
    align-content: center;
    margin: auto;
}
.img2 {
    width: 35%;
    height: 100%;
    margin: 50px;
}

</style>