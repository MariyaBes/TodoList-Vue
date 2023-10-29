import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
    },
    {
      path: '/edit/:noteId',
      name: 'note-edit',
      // component: NoteEdit,
    },
  ]
})

export default router
