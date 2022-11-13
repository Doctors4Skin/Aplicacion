<template>
    
    
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> -->
    <div id="contenedor" class="grid text-center d-flex flex-row " style="--bs-columns: 18; --bs-gap: .5rem;">
         <div class="g-col-4 text-white menu border bg-lightt ">
             <div class="btn-group-vertical h-100 ml-0  " role="group" aria-label="Vertical button group">
                     
    
                     <router-link class="p-5 text-decoration-none text-dark" :to=" {name: 'loggin' }">consultas</router-link>
                     <router-link class="p-5 text-decoration-none text-dark" :to=" {name: 'loggin' }">Pagos</router-link>
                     <router-link class="p-5 text-decoration-none text-dark" :to=" {name: 'loggin' }">Historial</router-link>
 
                     
 
                     <router-link tag="button" class="btn text-danger mt-10 pt-10" :to="{name: 'loggin'}"> Cerrar Sesion</router-link>
                     <!-- <button type="button"   class="btn text-danger mt-10 pt-10">Cerrar Sesion</button> -->
                     
 
                 </div>
             
             
         </div>
         
 
 
      <div class="informacion">
             <h1 class="text-center mb-8 mt-8 text-primary">Bienvenido a Doctors4Skin!</h1>
 
             <div>
                 <h3 class="m-5 ">Resumen</h3>
 
             </div>
 
             <div class="container px-3 text-center mb-8">
                 <div class="row gx-5">
 
                     <div class="col">
 
                         <div class="p-3 h-100 border bg-light">
                             <p> Saldo restante de dinero </p>
                             <p> s/554.5 </p>
                         </div>
 
                     </div>
                     <div class="col">
 
                         <div class="p-3 h-100 border bg-light">
                             <p>Total de consultas realizadas</p>
                             <p> 23 </p>
                         </div>
 
                     </div>
                     <div class="col">
 
                         <div class="p-3 h-100 border bg-light">
                             <p>Total de consultas pendientes</p>
                             <p> 2</p>
                         </div>
 
                     </div>
 
                 </div>
             </div>
 
 
             <div>
                     <h3 class="m-5">Mis Consultas</h3>
 
                 </div>
 
                 <div class="d-flex justify-content-center mg-10">
                     <ul class="list-group w-50 lista">
                         <li class="list-group-item" >Dr. Ricardo Huaman</li>
                         <li class="list-group-item">Dr. Ricardo Huaman</li>
                         <li class="list-group-item">Dr. Ricardo Huamanm</li>
                         <li class="list-group-item" >Dr. Ricardo Huaman</li>
                         <li class="list-group-item">Dr. Rojas Poma</li>
                         <li class="list-group-item">Dr. Ricardo Hornaldo</li>
 
                     </ul>
                 </div>
 
 
         </div>
 
 
      
    </div>
 
 </template>
 
 <script > 
 
 import router from '@/router/router';
 import { DoctorServices } from '@/services/DoctorServices'
 import { useRoute, useRouter } from "vue-router";
 
 
 
 
 
 
 
 export default {
     name: 'Doctor',
     props: ["id"],
     data() {
         return {
             doctor: {},
             name: 0,
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
     },
     getDoctor(){
         this.loadData()
         this.name = this.id;
     }
     
 }
 
 </script>
 
 <style>
 .color {
     background-color: aquamarine;
 }
 
 .color1 {
     background-color: blue;
 }
 
 #contenedor {
 display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
   grid-auto-rows: 100px;
   height: 100vh;
 }
 
 #contenedor .menu {
   width: 20;
   border:solid blue ; 
 }
 
 #contenedor .informacion {
   width: 80%;
  ; 
 }
 
 .menu ul{
     list-style:none
 }
 
 
 </style>