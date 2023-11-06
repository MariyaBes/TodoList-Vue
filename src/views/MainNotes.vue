<template>
  <Crumb :title-crumb="titleCrumb" :crumbId="1"/>

  <div class="task-area">

    <Task v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote"/>
    <AddNewTask :notes="notes" @addNote="addNewNote"/>

  </div>

  <Crumb :title-crumb="titleCrumb" :crumbId="2"/>
</template>

<script>
import Crumb from "@/components/general/Crumb.vue";
import Task from "@/components/main/Task.vue";
import AddNewTask from "@/components/main/AddNewTask.vue";

export default {
  components: {AddNewTask, Task, Crumb},
  props: {
    titleCrumb: {
      type: Array
    },
    notes: {
      type: Array
    },
    deleteNote: {
      type: Function
    },
    addNewNote: {
      type: Function
    }
  },
  methods: {
    deleteNote() {
      this.$emit('deleteNote', this.notes.id);
    },
    addNewNote(newNote) {
      this.$emit("addNote", newNote);
    }
  }
}
</script>

<style scoped>

.task-area {
  display: flex;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px 32px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

@media (min-width: 1700px) {
  .task-area {
    display: flex;
    width: 1698px;
    margin-right: auto;
    margin-left: auto;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 32px 50px;
    margin-bottom: 50px;
  }
}
</style>