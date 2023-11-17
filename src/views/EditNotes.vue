<template>
  <Crumb :titleCrumb="titleCrumb[1]"/>

  <div class="edit-area">
    <ContainerEdit :notes="getNoteById()" @deleteNoteInEdit="deleteNoteInEdit" :noteId="noteId"/>
  </div>

</template>

<script>
import Crumb from "@/components/general/Crumb.vue";
import ContainerEdit from "@/components/edit/ContainerEdit.vue";
import Undo from "@/components/general/Undo.vue";

export default {
  components: {Undo, ContainerEdit, Crumb},
  data() {
    return {
      undoStack: [],
      localNotes: [...this.notes],
    }
  },
  props: {
    titleCrumb: {
      type: Array
    },
    notes: {
      type: Object
    },
    addNewNote: {
      type: Function
    },
    noteId: {
      type: String,
      required: true
    }
  },
  methods: {
    getNoteById() {
      const id = +this.noteId;
      return this.notes.find((note) => note.id === id);
    },

    deleteNoteInEdit(currId) {
      const index = this.notes.findIndex(note => note.id === currId);
      this.notes.splice(index, 1);

      this.saveLocalStorage();
      this.$router.push('/');
    },

    saveLocalStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
  }
}
</script>

<style scoped>

.edit-area {
  display: flex;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  gap: 24px 32px;
  margin-bottom: 24px;
}

@media (min-width: 1700px) {
  .edit-area {
    display: flex;
    width: 1698px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    gap: 32px 50px;
    margin-bottom: 50px;
  }
}
</style>