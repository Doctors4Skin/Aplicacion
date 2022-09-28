<template>
    <form>
        <div class="inputs">
            <label style="align:left">Nombres:</label><br/>
            <InputText v-model="primerNombre"/>&nbsp;
            <InputText v-model="segundoNombre"/>
        </div>
        <div  class="inputs">
            <label>Apellidos</label><br/>
            <InputText v-model="primerApellido"/>
            <InputText v-model="segundoApellido"/>
        </div>
        <div  class="inputs">
            <label>RUC</label><br/>
            <InputText v-model="ruc"/>
        </div>
        <div  class="inputs">
            <label>Correo</label><br>
            <InputText v-model="correo"/>
        </div>
        <div class="inputs">
            <label>Contrasena</label><br/>
            <InputText v-model="password"/>
            <InputText v-model="confirmPassword"/>
        </div>
    </form>
  
</template>

<script>
export default {
    data() {
        return {
            primerNombre: '',
            segundoNombre: '',
            primerApellido: '',
            segundoApellido: '',
            ruc: '',
            correo: '',
            password: '',
            confirmPassword: '',
        }
    }
}
</script>

<style scoped>

Form {
    width: 100%;
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:white;
    border-style:solid;
}

Button {
    margin: 50px;
    height: 60px;
    padding: 0.5em 1em;
    border: none;
    width: 60%;
}
.inputs {
    justify-content: space-around;
    margin: 20px;
}

</style>