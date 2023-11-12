<template>
  <Crumb />
  <div class="task-area" @click="console.log(notes)">
    <Task v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote"/>
    <AddNewTask :notes="notes" @addNote="createNewNote" :input="input"/>
  </div>
</template>

<script>
import Crumb from "@/components/general/Crumb.vue";
import Task from "@/components/main/task/Task.vue";
import AddNewTask from "@/components/main/task/AddNewTask.vue";

export default {
  components: {AddNewTask, Task, Crumb},
  props: {
    notes: {
      type: Object
    },
    addNewNote: {
      type: Function
    },
    input: {
      type: Object
    }
  },
  methods: {
    deleteNote(noteId) {
      console.log('deleteNote', noteId);

      const index = this.notes.findIndex(note => note.id === noteId);
      console.log('index', index);

      this.notes.splice(index, 1);
      this.saveDataToLocalStorage();
    },
    createNewNote() {
      this.$emit("addNote");
    },
    saveDataToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  },
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