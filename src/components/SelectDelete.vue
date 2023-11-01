<template>
  <form @click="openModalDeleteTask">
    <div  class="task-select-delete">
      <li class="task-select-delete-list">
        <IconDelete class="task-select-delete-list__icon"/>
      </li>
    </div>
  </form>

  <div>
<!--    <ModalDeleteTask :show="show" @update:show="updateShow(true)" @delete-note="deleteNote"/>-->
  </div>

</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";
import ModalDeleteTask from "@/components/ModalDeleteTask.vue";

export default {
  components: {ModalDeleteTask, IconDelete},
  props: {
    show: Boolean,
    noteId: String,
    deleteNote: Function
  },
  emits: ['delete-note', 'update:show'], // Объявляем события "delete-note" и "update:show"
  methods: {
    openModalDeleteTask() {
      this.$emit('delete-note'); // Генерируем событие "delete-note" при клике
      this.updateShow(true); // Вызываем метод для обновления "show"
    },
    updateShow(value) {
      this.$emit('update:show', value); // Генерируем событие "update:show" для обновления "show"
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