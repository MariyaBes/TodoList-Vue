<template>
  <div class="container-edit">
    <div class="container-edit-header">
      <div class="container-edit-header__title">
        <span class="container-edit-header__title-name">Изменить</span>
        <IconReturn class="container-edit-header__title-icon" alt="Повторить изменения"/>
      </div>

      <div class="container-edit-header__delete" @click="openModalDelete">
        <IconDelete class="container-edit-header__delete-icon"/>
        <span class="container-edit-header__delete-title">Удалить заметку</span>
      </div>
    </div>

    <span class="container-edit__line"></span>

    <Input :titleInput="titleInput[0]" :note="notes"/>

    <span class="container-edit__line"></span>

    <div class="container-edit-content">
      <div class="container-edit-content__title">
        <span class="container-edit-content__title-text">
          Задачи
        </span>
      </div>

      <div class="container-edit-content__list">
        <Checkbox :items="notes"/>
      </div>
    </div>

    <span class="container-edit__line"></span>

    <div class="container-edit-add-new">
      <Input :titleInput="titleInput[1]" :note="notes"/>
      <div class="container-edit-add-new__button">
        <ButtonAdd @addTask="addTask"/>
      </div>
    </div>

    <div class="container-edit-event">
      <button class="container-edit-event__button-success">Сохранить</button>
      <button
          @click="$router.push('/')"
          class="container-edit-event__button-cancel"
      >Отмена</button>
    </div>

    <div>
      <ModalDeleteTask v-model:show="isVisible" @deleteNote="deleteNoteInEdit"/>
    </div>
  </div>
</template>

<script>

import IconDelete from "@/components/icons/IconDelete.vue";
import IconReturn from "@/components/icons/IconReturn.vue";
import Checkbox from "@/components/general/Checkbox.vue";
import Input from "@/components/edit/Input.vue";
import ButtonAdd from "@/components/general/ButtonAdd.vue";
import ModalDeleteTask from "@/components/main/modal/ModalDeleteTask.vue";

export default {
  components: {ModalDeleteTask, ButtonAdd, Input, Checkbox, IconReturn, IconDelete},
  props: {
    notes: {
      type: Object
    },
  },
  data() {
    return {
      titleInput: [
        {id: 1, title: 'Заголовок'},
        {id: 2, title: 'Добавить новую задачу:'}
      ],
      isVisible: false,
    }
  },
  methods: {
    openModalDelete() {
      this.isVisible = true;
    },
    deleteNoteInEdit() {
      this.$emit('deleteNoteInEdit', this.notes.id);
      this.isVisible = false;
    }
  }
}
</script>

<style scoped>
.container-edit {
  display: flex;
  width: 680px;
  height: max-content;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 25px;

  border-radius: 35px;
  background: white;
  box-shadow: 0 11px 35px 0 rgba(0, 0, 0, 0.15);
}

.container-edit-header {
  display: flex;
  width: 100%;
  padding: 5px 0;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.container-edit-header__title {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
}

.container-edit-header__title-name {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
}

.container-edit-header__title-icon {
  cursor: pointer;
  border-radius: 8px;
}


.container-edit-header__delete {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 6px 6px;
  border-radius: 15px;
}

.container-edit-header__delete:hover {
  background: #DFDFDF;
  transition: all ease-in-out 0.3s;
}


.container-edit-header__delete-icon {
  fill: #EF4444;
}

.container-edit-header__delete-title {
  color: #EF4444;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
}

.container-edit__line {
  width: 100%;
  height: 1px;
  background: #D1D5DB;
}

.container-edit-add-new {
  width: 100%;
  display: flex;
  gap: 15px;
}

.container-edit-add-new__button {
  display: flex;
  padding-top: 29px;
}

.container-edit-event {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

.container-edit-event__button-success {
  display: flex;
  padding: 13px 79px;
  justify-content: center;
  align-self: center;
  gap: 10px;
  flex: 1 0 0;
  border: none;
  border-radius: 16px;
  background: linear-gradient(90deg, #2DD4BF 0%, #5EEAD4 100%);

  color: white;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
}

.container-edit-event__button-success:hover {
  background: linear-gradient(90deg, #14b8a6 0%, #2DD4BF 100%);
}

.container-edit-event__button-cancel {
  display: flex;
  padding: 13px 79px;
  justify-content: center;
  align-self: center;
  gap: 10px;
  flex: 1 0 0;
  border: none;
  border-radius: 16px;
  background: linear-gradient(90deg, #D9D9D9 0%, #DFDFDF 100%);

  color: white;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
}

.container-edit-event__button-cancel:hover {
  background: linear-gradient(90deg, #a3a3a3 0%, #d4d4d4 100%);
}

.container-edit-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.container-edit-content__title {
  width: 100%;
}

.container-edit-content__title-text {
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.9px;
}

.container-edit-content__list {
  display: flex;
  width: 100%;
  padding: 0 28px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}


</style>