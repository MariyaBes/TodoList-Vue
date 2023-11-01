<template>
  <header class="header">
    <div class="header-title">
      <p class="header-text">Заметки</p>
      <IconCheck class="header-icon"/>
    </div>
  </header>

  <Crumb :title-crumb="titleCrumb" :crumbId="1"/>

  <div class="task-area">

      <Task v-for="note in notes" :key="note.id" :note="note"/>

    <AddNewTask :notes="notes" @addNote="addNewNote"/>

  </div>

  <Crumb :title-crumb="titleCrumb" :crumbId="2"/>
</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";
import Task from "@/components/Task.vue";
import AddNewTask from "@/components/AddNewTask.vue";
import Crumb from "@/components/Crumb.vue";
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
        {id: this.generateUniqueId(), title: 'Новый заметка1', points: [
            {pointId: this.generateUniqueId(), text: 'Новый элемент1'},
            {pointId: this.generateUniqueId(), text: 'Новый элемент2'},
            {pointId: this.generateUniqueId(), text: 'Новый элемент3'}
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
      const newNote = {
        id: this.generateUniqueId(),
        title: 'Новая заметка',
        points: [{ pointId: this.generateUniqueId(), text: 'Новый элемент' }],
      };
      this.notes.push(newNote);
      this.saveDataToLocalStorage();
    },
    saveDataToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
  },
  mounted() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }
})
</script>
