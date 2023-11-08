<template>
  <div class="container-edit">
    <div class="container-edit-header">
      <div class="container-edit-header__title">
        <span class="container-edit-header__title-name">Изменить</span>
        <IconReturn class="container-edit-header__title-icon" alt="Повторить изменения"/>
      </div>

      <div class="container-edit-header__delete">
        <IconDelete class="container-edit-header__delete-icon"/>
        <span class="container-edit-header__delete-title">Удалить заметку</span>
      </div>
    </div>

    <span class="container-edit__line"></span>

    <Input :titleInput="titleInput[0]" />

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

    <div class="container-edit-add-new">
      <Input :titleInput="titleInput[1]" />
    </div>

    <Button :titleButton="titleButton[1]"/>
  </div>
</template>

<script>

import IconDelete from "@/components/icons/IconDelete.vue";
import IconReturn from "@/components/icons/IconReturn.vue";
import Checkbox from "@/components/general/Checkbox.vue";
import Input from "@/components/edit/Input.vue";
import Button from "@/components/general/Button.vue";

export default {
  components: {Button, Input, Checkbox, IconReturn, IconDelete},
  props: {
    notes: {
      type: Object
    },
    titleButton: {
      type: Array
    }
  },
  data() {
    return {
      titleInput: [
        {id: 1, title: 'Заголовок'},
        {id: 2, title: 'Добавить новую задачу:'},
      ]
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
}

</style>