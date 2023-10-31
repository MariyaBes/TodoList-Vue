<template>
  <header class="header">
    <div class="header-title">
      <p class="header-text">Заметки</p>
      <IconCheck class="header-icon"/>
    </div>
  </header>

  <Crumb :title-crumb="titleCrumb" :crumbId="1"/>

  <div class="task-area">

    <Task :notes="notes" @addNote="addNewNote"/>
    <AddNewTask :notes="notes" @addNote="addNewNote"/>

  </div>

  <Crumb :title-crumb="titleCrumb" :crumbId="2"/>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";
import Task from "@/components/Task.vue";
import AddNewTask from "@/components/AddNewTask.vue";
import Crumb from "@/components/Crumb.vue";
import ModalCreateTask from "@/components/ModalCreateTask.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {IconCheck, Crumb, Task, AddNewTask},
  data() {
    return {
      titleCrumb: [
        { id: 1, title: "Ваш список задач" },
        { id: 2, title: "Выполненные задачи" }
      ],
      notes: [
        {id: 1, title: '', points: [
            {pointId: 1, text: ''},
            {pointId: 2, text: ''},
            {pointId: 3, text: ''}
          ],
        }
      ],
    }
  },
  methods: {
    generateUniqueId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    addNewNote() {
      function generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
      }
      const newNote = {
        id: generateUniqueId(),
        title: '',
        points: [],
      };

      this.notes.push(newNote);
      this.saveDataToLocalStorage();
    },
    saveDataToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
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
