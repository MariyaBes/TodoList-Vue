<template>
  <div class="task-container" v-if="note">
    <div class="task-header">
      <p class="task-header__text">{{ note.title }}</p>

      <button class="task-button" @click="$router.push({ name: 'edit', params: {noteId: note.id}})">
        <IconEdit />
        Изменить
      </button>


      <div class="task-header__button">
        <SelectDelete :notes="note" @deleteNote="deleteNote" />
      </div>

    </div>

    <div class="task-content" v-if="note.points && note.points.length > 0">
      <ListPoints  :items="note" :maxVisiblePoints="3"/>
    </div>

    <div class="task-content" v-else>
      <p class="task-content__text">Список пуст, добавьте новые задачи.</p>
    </div>
  </div>
</template>

<script>
import SelectDelete from "@/components/main/SelectDelete.vue";
import ListPoints from "@/components/general/ListPoints.vue";
import IconEdit from "@/components/icons/IconEdit.vue";

export default {
  components: {IconEdit, ListPoints, SelectDelete},
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
@media (min-width: 1700px) {
  .task-container {
    width: 100%;
    max-width: 450px;
  }
}

@media (max-width: 980px) {
  .task-container {
    width: 100%;
    max-width: 400px;
  }
}


.task-container {
  display: flex;
  width: 405px;
  padding: 32px;
  align-items: center;
  gap: 24px 5%;
  flex-shrink: 0;
  flex-wrap: wrap;

  border-radius: 25px;
  background: white;
  box-shadow:  0 11px 35px 0 rgba(0, 0, 0, 0.15);
}


.task-header {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1 0 0;
}

.task-header__text {
  color: #333333;
  width: 200px;
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
  display: flex;
  padding: 5px;
  outline: none;
  border: none;
  width: 110px;
  height: 32px;
  gap: 5px;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  list-style: none;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
}

.task-button:hover {
  background: #eef1f3;
  transition: all ease-in-out 0.1s;
}

</style>