import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import {createRouter, createWebHistory} from "vue-router";
import MainNotes from "@/views/MainNotes.vue";
import EditNotes from "@/views/EditNotes.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'Main',
        path: '/',
        component: MainNotes,
        props: true
    }, {
        name: 'Edit',
        path: '/edit-notes',
        component: EditNotes
    }]
})

createApp(App)
    .use(router)
    .mount('#app')
