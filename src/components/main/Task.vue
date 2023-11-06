<template>
  <div class="task-container" v-if="note" @click="console.log(this.note.id)">
    <div class="task-header">
      <p class="task-header__text">{{ note.title }}</p>
      <div class="task-header__button">
        <SelectDelete :notes="note" @deleteNote="deleteNote" />
      </div>
    </div>
    <div class="task-content">
      <Checkbox  :items="note" />

    </div>
    <button class="task-button">
        <span class="task-button-edit" @click="$router.push('/edit-notes')">Редактировать</span>
    </button>
  </div>
</template>

<script>
import IconDotsVertical from "@/components/icons/IconDotsVertical.vue";
import Checkbox from "@/components/general/Checkbox.vue";
import SelectDelete from "@/components/main/SelectDelete.vue";

export default {
  components: {SelectDelete, Checkbox, IconDotsVertical},
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