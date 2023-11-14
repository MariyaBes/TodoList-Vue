<template>
  <Crumb :titleCrumb="titleCrumb[0]"/>
  <Undo :undoStack="undoStack" @undo="undo" @closeUndo="closeUndo"/>
  <div class="task-area">
    <Task v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote"/>
    <AddNewTask :notes="notes" @addNote="createNewNote" :input="input"/>
  </div>
</template>
<script>
import Crumb from "@/components/general/Crumb.vue";
import Task from "@/components/main/task/Task.vue";
import AddNewTask from "@/components/main/task/AddNewTask.vue";
import Undo from "@/components/general/Undo.vue";
export default {
  components: {Undo, AddNewTask, Task, Crumb},
  data() {
    return {
      undoStack: [],
      localNotes: [...this.notes], // Создаем локальную копию массива пропсов
    }
  },
  props: {
    notes: {
      type: Object
    },
    addNewNote: {
      type: Function
    },
    input: {
      type: Object
    },
    titleCrumb: {
      type: Array
    }
  },
  methods: {
    deleteNote(noteId) {
      const index = this.notes.findIndex(note => note.id === noteId);

      // Сохраняем предыдущее состояние перед удалением
      const change = {
        type: 'deleteNote',
        index,
        deletedNote: this.notes[index]
      };

      this.notes.splice(index, 1);
      this.saveDataToLocalStorage();

      this.undoStack.push(change);
      console.log("Undo стек:", this.undoStack);
    },

    createNewNote() {
      this.$emit("addNote");
    },

    saveDataToLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },

    undo()  {
      if (this.undoStack.length > 0) {
        const lastChange = this.undoStack.pop();

        if (lastChange.type === 'deleteNote') {
          // Если последнее изменение - удаление заметки, восстанавливаем заметку по сохраненным данным
          this.notes.splice(lastChange.index, 0, lastChange.deletedNote);
        }
        this.saveDataToLocalStorage();
      }
    },

    closeUndo() {
      this.undoStack = [];
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