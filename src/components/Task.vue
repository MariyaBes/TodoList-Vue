<template>
  <div class="task-container">
    <div
        v-for="note in notes"
        :key="note.id"
        class="task-header"
    >
      <p class="task-header__text">{{ note.title }}</p>

      <SelectDelete :show="showDeleteModal"/>

    </div>
    <div class="task-content">

      <Checkbox  :items="notes" />

    </div>
    <button class="task-button">
      <span class="task-button-edit">Редактировать</span>
    </button>
  </div>
</template>

<script>
import IconDotsVertical from "@/components/icons/IconDotsVertical.vue";
import Checkbox from "@/components/Checkbox.vue";
import SelectDelete from "@/components/SelectDelete.vue";

export default {
  components: {SelectDelete, Checkbox, IconDotsVertical},
  props: {
    notes: {
      type: Array
    }
  },
  data() {
    return {
      showDeleteModal: false
    }
  }
}
</script>

<style scoped>

@media (max-width: 1700px) {
  .task-container {
    width: 100%;
    max-width: 387px;
  }
}

@media (max-width: 890px) {
  .task-container {
    width: 100%;
  }
}

.task-container {
  display: flex;
  width: 387px;
  padding: 32px;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 24px 168px;
  flex-shrink: 0;
  flex-wrap: wrap;

  border-radius: 35px;
  background: white;
  box-shadow:  0 11px 35px 0 rgba(0, 0, 0, 0.15);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 24px;
  flex: 1 0 0;
  flex-wrap: wrap;
}

.task-header__text {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 88%;
}

.task-content {
  display: flex;
  width: 100%;
  padding: 0 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.task-button {
  display: inline-block;
  padding: 14px 89px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 16px;
  background: linear-gradient(90deg, #2DD4BF 0%, #5EEAD4 100%);
  cursor: pointer;
  transition: background 0.5s ease-in-out;
}

.task-button:hover {
  background: linear-gradient(90deg, #14b8a6 0%, #2DD4BF 100%);
  transition: all ease-in-out 0.3s;
}

.task-button-edit {
  color: white;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 1.1px;
}

</style>