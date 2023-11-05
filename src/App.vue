<template>
  <header class="header">
    <div class="header-title">
      <p class="header-text">Заметки</p>
      <IconCheck class="header-icon"/>
    </div>
  </header>

  <Crumb :title-crumb="titleCrumb" :crumbId="1"/>

  <div class="task-area">

    <Task v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote"/>

    <AddNewTask :notes="notes" @addNote="addNewNote"/>

  </div>

  <Crumb :title-crumb="titleCrumb" :crumbId="2"/>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";
import Task from "../../../Todo-list-project/todo-vue/src/components/Task.vue";
import AddNewTask from "../../../Todo-list-project/todo-vue/src/components/AddNewTask.vue";
import Crumb from "../../../Todo-list-project/todo-vue/src/components/Crumb.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {IconCheck, Crumb, Task, AddNewTask},
  data() {
    return {
      titleCrumb: [
        { id: 1, title: "Ваш список задач" },
        { id: 2, title: "Выполненные задачи" }
      ],
      notes: [ ],
    }
  },
  methods: {
    addNewNote() {
      const newNote = { };
      this.notes.push(newNote);
      this.saveDataToLocalStorage();
      console.log(newNote)
    },
    saveDataToLocalStorage() {
      try {
        localStorage.setItem('notes', JSON.stringify(this.notes));
      } catch (error) {
        console.error('Ошибка: ', error);
      }
    },
    deleteNote(noteId) {
      console.log('deleteNote', noteId);

      const index = this.notes.findIndex(note => note.id === noteId);
      console.log('index', index);

      this.notes.splice(index, 1);
      this.saveDataToLocalStorage();
    }
  },
  mounted() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }
})
</script>
