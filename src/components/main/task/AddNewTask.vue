<template>
  <form @click="openModalCreatedTask">
    <div class="task-container-new">
      <span class="task-new-text">Добавить новую заметку</span>
      <IconPlusNewTask />
    </div>
    <div>
      <ModalCreateTask
          v-model:show="isVisible"
          @addNote="addNewNote"
          :notes="notes"
      />
    </div>
  </form>
</template>

<script>
import IconPlusNewTask from "@/components/icons/IconPlusNewTask.vue";
import {defineComponent} from "vue";
import ModalCreateTask from "@/components/main/modal/ModalCreateTask.vue";

export default defineComponent({
  components: {IconPlusNewTask, ModalCreateTask},
  props: {
    notes: {
      type: Array,
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    openModalCreatedTask() {
      this.isVisible = true;
    },
    addNewNote(newNote) {
      this.$emit("addNote", newNote);
      this.isVisible = false;
    }
  }
})
</script>

<style scoped>
@media (max-width: 1700px) {
  .task-container-new {
    width: 100%;
    max-width: 405px;
  }
}

@media (max-width: 980px) {
  .task-container-new {
    width: 100%;
    max-width: 400px;
  }
}

.task-container-new {
  display: flex;
  width: 405px;
  height: 250px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex-shrink: 0;

  border-radius: 25px;
  background: white;
  box-shadow: 0 11px 35px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.task-container-new:hover {
  background: #eef1f3;
  transition: all ease-in-out 0.3s;
}

.task-new-text {
  color: #333333;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
}
</style>