<template>
  <div v-if="isVisible" class="task-select-delete">
    <li class="task-select-delete-list">
      <IconDelete/>
      <p class="task-select-delete-list__text">Удалить заметку</p>
    </li>
  </div>
</template>

<script>
import IconDelete from "@/components/icons/IconDelete.vue";

export default {
  components: {IconDelete},
  props: {
    isVisible: Boolean,
  },
  methods: {
    closeDropdown() {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.task-select-delete {
  display: flex;
  position: absolute;
  margin-left: 83px;
  margin-top: 75px;
  width: 240px;
  justify-content: center;
  align-items: center;
  z-index: 10;

  border-radius: 8px;
  background: white;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.task-select-delete:hover {
  background: #eef1f3;
}

.task-select-delete-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 10px;
  padding: 11px 15px;
}

.task-select-delete-list__text {
  color: #EF4444;
  font-size: 16px;
  font-weight: 700;
}

</style>