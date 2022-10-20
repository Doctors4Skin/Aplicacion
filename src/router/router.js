import { createRouter, createWebHashHistory } from 'vue-router'
import isRegisterDoctor from './auth-guard'
const routes = [
    {
        path: '/',
        redirect: '/loggin',
        //component: () => import(/* webpackChunkName: "appi"*/'@/App.vue')
    },
    {
        path:'/loggin',
        name: 'loggin',
        component: () => import(/* webpackChunkName: "loggin"*/ '@/pages/loggin/Loggin.vue'),
        children: []

    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register"*/ '@/pages/register/Register.vue')
    },
    {
        path:'/doctors/:id',
        name: 'Doctor',
        props: true,
        //beforeEnter: [isRegisterDoctor],
        component: () => import(/* webpackChunkName: "doctorid"*/'@/pages/Doctor/Home.vue')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router