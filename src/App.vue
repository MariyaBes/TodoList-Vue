<template>
  <header class="header">
    <div class="header-title">
      <p class="header-text">Заметки</p>
      <IconCheck class="header-icon"/>
    </div>
  </header>

  <RouterView
      :titleCrumb="titleCrumb"
      :notes="notes"
      :addNewNote="addNewNote"
  />

</template>

<script>
import IconCheck from "@/components/icons/IconCheck.vue";
import {defineComponent} from "vue";
import EditNotes from "@/views/EditNotes.vue";
import MainNotes from "@/views/MainNotes.vue";

export default defineComponent({
  components: {EditNotes, MainNotes, IconCheck},
  data() {
    return {
      titleCrumb: [
        { id: 1, title: "Ваш список задач"  },
        { id: 2, title: "Редактирование" }
      ],
      notes: [],
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
