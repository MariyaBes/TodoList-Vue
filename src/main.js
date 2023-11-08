import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import {createRouter, createWebHistory} from "vue-router";
import MainNotes from "@/views/MainNotes.vue";
import EditNotes from "@/views/EditNotes.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'main',
        path: '/',
        component: MainNotes,
        props: true
    }, {
        name: 'edit',
        path: '/edit-notes/:noteId',
        component: EditNotes,
        props: true
    }]
})

createApp(App)
    .use(router)
    .mount('#app')
