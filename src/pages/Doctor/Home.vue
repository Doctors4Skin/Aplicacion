<template>
    <div v-if="doctor">
        <h1>Bienvenido</h1>
        <h1>{{doctor.name}}</h1>
        <h1>{{doctor.lastName}}</h1>
    </div>
</template>

<script>
import { DoctorServices } from '@/services/DoctorServices'

export default {
    name: 'Doctor',
    props: ["id"],
    data () {
        return {
            doctor: {}
        }
    },
    methods: {
        async loadData() {
            this.doctor = await this.doctorServices.getById(this.id)
        }
    },
    created() {
        this.doctorServices = new DoctorServices
    },
    mounted() {
        this.loadData()
        console.log(this.id)
    }
}
</script>

<style>

</style>