<template>
  <div class="container-edit" >
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

    <!--    ИНПУТ ИЗМЕНЕНИЯ ЗАГОЛОВКА -->
    <div class="container-edit-change-title">
      <div class="container-edit-change-title__title">
        <span class="container-edit-change-title__title-text">
          Заголовок
        </span>
      </div>

      <input
          type="text"
          placeholder="Введите новое название..."
          class="container-edit-change-title__input"
          v-model='currNotes'
          @input="isChangeTitle ? null : changeTitle"
      >
    </div>

    <span class="container-edit__line"></span>

    <!--    СПИСОК ПУНКТОВ ЗАМЕТКИ -->
    <div class="container-edit-content">
      <div class="container-edit-content__title">
        <span class="container-edit-content__title-text">
          Задачи
        </span>
      </div>

      <div class="container-edit-content__list">
        <Checkbox :notes="notes"/>
      </div>
    </div>

    <span class="container-edit__line"></span>

    <!--    ИНПУТ ДОБАВЛЕНИЯ -->
    <div class="container-edit-add-new">
      <div class="container-edit-change-title">
        <div class="container-edit-change-title__title">
        <span class="container-edit-change-title__title-text">
          Добавить новую задачу:
        </span>
        </div>

        <input
            type="text"
            placeholder="Введите название..."
            class="container-edit-change-title__input"
            v-model='currPoint.text'
        >
      </div>
      <div class="container-edit-add-new__button">
        <ButtonAdd @addPoints="addPoints"/>
      </div>
    </div>

<!--    КНОПКИ "СОХРАНИТЬ" И "ИЗМЕНИТЬ"-->
    <div class="container-edit-event">
      <button
          @click="saveEdits"
          class="container-edit-event__button-success">
        Сохранить
      </button>

      <button
          @click="cancelEdits"
          class="container-edit-event__button-cancel">
        Отмена
      </button>
    </div>

    <!--    МОДАЛЬНОЕ ОКНО -->
    <div>
      <ModalDeleteTask v-model:show="isVisible" @deleteNote="deleteNoteInEdit"/>
    </div>
  </div>
</template>

<script>

import IconDelete from "@/components/icons/IconDelete.vue";
import IconReturn from "@/components/icons/IconReturn.vue";
import Checkbox from "@/components/edit/Checkbox.vue";
import ButtonAdd from "@/components/general/ButtonAdd.vue";
import ModalDeleteTask from "@/components/main/modal/ModalDeleteTask.vue";

export default {
  components: {ModalDeleteTask, ButtonAdd, Checkbox, IconReturn, IconDelete},
  props: {
    notes: {
      type: Object
    },
    noteId: {
      type: String
    }
  },
  data() {
    return {
      isVisible: false,
      currPoint: { text: '' },
      currNotes: this.notes.title,
      originalNotes: JSON.parse(JSON.stringify(this.notes)),
      isChangeTitle: false
    }
  },
  methods: {
    openModalDelete() {
      this.isVisible = true;
    },
    deleteNoteInEdit() {
      this.$emit('deleteNoteInEdit', this.notes.id);
      this.isVisible = false;
    },
    addPoints() {
      if (this.currPoint.text) {
        this.currPoint.pointId = Date.now();
        this.currPoint.isChecked = false;
        this.notes.points.push(
            {pointId: this.currPoint.pointId, text: this.currPoint.text, isChecked: this.currPoint.isChecked }
        );
        this.currPoint.text = '';
        console.log(`Пункт в заметке под id - ${this.currPoint.pointId} и она выполнена - ${this.currPoint.isChecked}`);
      }
    },
    changeTitle() {
      this.isChangeTitle = true;
      this.originalNotes.title = this.currNotes;
      this.isChangeTitle = false;
      console.log('currNotes -> ', this.currNotes, 'Notes -> ', this.originalNotes.title);
    },
    cancelEdits() {
      Object.assign(this.notes, JSON.parse(JSON.stringify(this.originalNotes)));
      this.$router.push('/');
    },
    saveEdits() {
      const updatedNote = {
        id: this.notes.id,
        title: this.currNotes,
        points: [...this.notes.points],
      };
      this.saveDataToLocalStorage(updatedNote);
      this.$router.push('/');
    },
    saveDataToLocalStorage(updatedNote) {
      try {
        const savedNotes = localStorage.getItem('notes');
        const notes = savedNotes ? JSON.parse(savedNotes) : [];

        // Находим индекс заметки, которую мы хотим обновить
        const index = notes.findIndex(note => note.id === updatedNote.id);

        // Если заметка найдена, обновляем её, в противном случае добавляем новую
        if (index !== -1) {
          notes[index] = updatedNote;
        } else {
          notes.push(updatedNote);
        }

        localStorage.setItem('notes', JSON.stringify(notes));
        this.notes.title = this.currNotes;
      } catch (error) {
        console.error('Ошибка: ', error);
      }
    },
  },
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

.container-edit-change-title {
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
  flex: 1 0 0;
}

.container-edit-change-title__title {
  align-items: center;
}

.container-edit-change-title__title-text {
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.9px;
}

.container-edit-change-title__input {
  display: flex;
  padding: 0 15px;
  align-items: center;
  align-self: stretch;
  height: 48px;
  border: 1px solid #DFDFDF;
  background: white;
  border-radius: 10px;
  justify-content: center;

  color: #333333;
  font-size: 16px;
  font-weight: 500;
}
</style>