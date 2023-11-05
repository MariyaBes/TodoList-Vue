<template>
  <form @click="openModalCreatedTask">
    <div class="task-container-new">
      <span class="task-new-text">Добавить новую заметку</span>
      <IconPlusNewTask />
    </div>
    <div>
      <ModalCreateTask v-model:show="isVisible" @addNote="addNewNote" :notes="notes"/>
    </div>
  </form>
</template>

<script>
import IconPlusNewTask from "@/components/icons/IconPlusNewTask.vue";
import {defineComponent} from "vue";
import ModalCreateTask from "@/components/ModalCreateTask.vue";

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
      console.log("AddNEw",this.isVisible)
    },
    addNewNote(newNote) {
      this.$emit("addNote", newNote);
      this.isVisible = false;
    }
  }
})
</script>

<style scoped>
.task-container-new {
  display: flex;
  width: 387px;
  height: 268px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex-shrink: 0;

  border-radius: 35px;
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