<template>
  <form @click="openModalDeleteTask">
    <div  class="task-select-delete">
      <li class="task-select-delete-list">
        <IconDelete class="task-select-delete-list__icon"/>
      </li>
    </div>
  </form>

  <div>
    <ModalDeleteTask v-model:show="showDeleteModal" @deleteNote="deleteNote"/>
  </div>

</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";
import ModalDeleteTask from "@/components/ModalDeleteTask.vue";

export default {
  components: {ModalDeleteTask, IconDelete},
  data() {
    return {
      showDeleteModal: false,
    }
  },
  props: {
    show: Boolean,
    notes: {
      type: Object,
    },
  },
  emits: ['deleteNote'],
  methods: {
    openModalDeleteTask() {
      this.showDeleteModal = true;
    },
    deleteNote() {
      this.$emit('deleteNote');
      this.showDeleteModal = false;
    }
  }
}
</script>

<style scoped>

.task-select-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 8px;
  list-style: none;
}

.task-select-delete:hover {
  background: #eef1f3;
  transition: all ease-in-out 0.1s;
}

.task-select-delete-list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.task-select-delete-list__icon {
  fill: #333333;
}

.task-select-delete-list__icon:hover {
  fill: #EF4444;
  transition: color ease-in-out 0.3s;
}
</style>