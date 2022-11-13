<template>
    <div class="head">
        <h1>Registrarse</h1>
    </div>
    <div class="container">
        <form>
            <h5>Nombre</h5>
            <InputText v-model="name" class="input"/>
            <h5>Apellido</h5>
            <InputText v-model="lastName" class="input"/>
            <h5>Correo</h5>
            <InputText v-model="email" class="input"/>
            <h5>Contrasena</h5>
            <InputText v-model="password" class="input"/>
            <h5>Ingresar como paciente</h5>
            <input class="checkbox_input" type="checkbox" id="checkbox" v-model="checked" />
            <Button label="Registrarse" class="button" v-on:click="register"/>
            
        </form>
    </div>
    <router-link :to=" {name: 'loggin' }"><Button label="Regresar" class="button" style="width: 20%"/></router-link>
</template>

<script>
import { DoctorServices } from '@/services/DoctorServices'
import { PatientServices } from '@/services/PatientService';

export default {
    data() {
        return {
            name: "",
            lastName: "",
            password: "",
            email: "",
            checked: false
        }
    },
    methods: {
        async register() {
        
            
      

            let message = "" 
            console.log(this.name.length)
            if(this.name.length == 0)
                message += 'Debe ingresar su nombre\n'
            if(this.lastName.length == 0)
                message += 'Debe ingresar su apellido\n'
            if(this.email.length == 0)
                message += 'Debe ingresar su email\n'
            if(this.password.length == 0)
                message += 'Debe ingresar una contrasena'
            if(message.length > 0) {
                console.log(message)
                return
            }

            const checkbox = document.getElementById('checkbox')
            console.log('checked',checkbox.checked)

            if(checkbox.checked)
            {
                const patient = {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                }
                await this.patientServices.registerPatient(patient)
            }
            else
            {
                const doctor = {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password
                }
                await this.doctorServices.registerDoctor(doctor)
            }

            
            this.name = ''
            this.lastName = ''
            this.email = ''
            this.password = ''
        }
    },
    created() {
        this.doctorServices = new DoctorServices
        this.patientServices = new PatientServices
    }
}
</script>

<style scoped>

form {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: auto; 
    display: flex;
    /* max-width: 450px; */
    border-style: solid;
    flex-direction: column;
    /* justify-content: left; */
    /* align-items: center; */
    width: 30%;
    height: 100%;
    border-radius: 30px;
}

.head {
    text-align: center;
}
.container {
    align-content: center;
    display: flex;
}
.button {
    display: block;
    margin: auto;
    align-self: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 40%;
    height: 60px;
    border-radius: 80px;
}
h5 {
    margin-left: 20%;
}
.input {
    width: 60%;
    align-content: center;
    margin:auto;
}

.checkbox_input{
    margin-right: 50%;
    height: 25px;
}

</style>