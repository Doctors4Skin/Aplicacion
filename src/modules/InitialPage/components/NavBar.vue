<template>
    <Toolbar class="p-toolbar">
        <template #start>
            <Button label="PATITO" class="mr-2" />
        </template>
        <template #end>
            <Button label="Home" class="p-button-secondary p-button-text" v-bind:onclick="mostrar"/>
            <Button label="About Us" class="p-button-secondary p-button-text"/>
            <Button label="Our Services" class="p-button-secondary p-button-text"/>
            <Button label="Call to Action" class="p-button-secondary p-button-text"/>
        </template>
    </Toolbar>
</template>

<script>
import getPatients from '../helpers';



export default {
    data() {
        return {

        }
    },
    methods: {
        async mostrar(){
            console.log('first')
            const { data } = await getPatients.get(`/${1}`)
            console.log(data)
            //console.log(getPatients.get(`/${1}`))
        }
    }

}
</script>

<style scoped>
.p-toolbar {
    background-color: white;
    margin-top: 0%;
}

.p-button-text {
    font-weight : bold ;
    font-size: 20px;
    padding-left: 30px;
    padding-right: 30px;
}

</style>