<template>
    <form>
        <div  class="inputs">
            <h3>Correo</h3>
            <InputText class="input" v-model="username"/>
            <h3>Contraseña</h3>
            <Password class="input" v-model="password" :feedback="false" toggleMask/>
        </div>
        <div class="inputs">
            <Button label="Inicia Sesion" class="p-button-outlined p-button-secondary"/>
            <br>
            <a class="anchor">Si aun no tienes una cuenta registrate aqui</a>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: ''
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
    width: 60%;
    align-content: center;
}
.input {
    width: 60%;
}
.anchor {
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
    width: 60%;
}
</style>