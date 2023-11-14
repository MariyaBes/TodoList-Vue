<template>
  <div class="task-container" v-if="note">
    <div class="task-header">
      <p class="task-header__text">{{ note.title }}</p>
      <div class="task-header__button">
        <SelectDelete :notes="note" @deleteNote="deleteNote" />
      </div>
    </div>
    <div class="task-content" v-if="note.points && note.points.length > 0">
      <ListPoints  :items="note" />
    </div>

    <div class="task-content" v-else>
      <p class="task-content__text">Список пуст, добавьте новые задачи.</p>
    </div>
    <button class="task-button" @click="$router.push({ name: 'edit', params: {noteId: note.id}})">
        <span class="task-button-edit">Редактировать</span>
    </button>
  </div>
</template>

<script>
import SelectDelete from "@/components/main/SelectDelete.vue";
import ListPoints from "@/components/general/ListPoints.vue";

export default {
  components: {ListPoints, SelectDelete},
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteNote() {
      this.$emit('deleteNote', this.note.id)
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
  align-items: center;
  flex: 1 0 0;
  flex-wrap: wrap;
}

.task-header__text {
  color: #333333;
  width: 250px;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 80%;
  margin-right: auto;
}

.task-header__button {
  margin-left: auto;
}

.task-content {
  display: flex;
  width: 100%;
  padding: 0 24px;
  flex-direction: column;
  align-items: flex-start;
  max-width: 85%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  gap: 10px;
}

.task-content__text {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  align-items: center;
  justify-content: center;
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
  letter-spacing: 1px;
}

</style>