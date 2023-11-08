<template>
  <Crumb :title-crumb="titleCrumb" :crumbId="3"/>
  <div class="edit-area">
    <ContainerEdit :notes="notes" :titleButton="titleButton"/>

  </div>
</template>

<script>
import Crumb from "@/components/general/Crumb.vue";
import ContainerEdit from "@/components/edit/ContainerEdit.vue";

export default {
  components: {ContainerEdit, Crumb},
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
    },
    titleButton: {
      type: Array
    }
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