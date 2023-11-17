<template>
  <form @submit.prevent>
    <div v-if="show" class="modal-container-back-screen" @click.stop="closeModal">
      <div @click.stop class="modal-container">

        <div class="modal-header">
          <h2 class="modal-header__title">Создать заметку</h2>
          <span class="modal-header__line"></span>
        </div>

        <div class="container-edit">

          <div class="modal-content-setname">
            <h2 class="modal-content-setname__text"></h2>
            <input
                v-model="currentNote.title"
                type="text"
                class="modal-content-setname__input"
                placeholder="Название заметки..."
            >
          </div>

          <span class="modal-header__line"></span>

          <div class="modal-content-view-add">
            <div class="modal-content-view-add-list" v-if="currentNote.points.length > 0">
              <ul>
                <li v-for="(point, index) in currentNote.points" :key="index" class="modal-content-view-add-list__text">
                  {{ point.text }}
                </li>
              </ul>
            </div>
          </div>

          <span class="modal-header__line"></span>

          <div class="modal-content-add-new-element">

            <input
                v-model="currentPoint.text"
                type="text"
                class="modal-content-add-new-element__input"
                placeholder="Добавить элемент..."
            >
            <ButtonAdd @addPoints="addPoints"/>

          </div>

          <div class="modal-content-event">
            <button @click="addNewNote" class="modal-content-event__button-success">Создать</button>
            <button @click="closeModal" class="modal-content-event__button-cancel">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import IconAdd from "@/components/icons/IconAdd.vue";
import ButtonAdd from "@/components/general/ButtonAdd.vue";

export default {
  components: {ButtonAdd, IconAdd },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: Array,
    },
  },
  data() {
    return {
      currentNote: { id: '', title: '', points: [] }, // Здесь хранится текущая заметка
      currentPoint: { pointId: '', text: '', isChecked: false }, // А здесь текущий элемент
      isListVisible: false, // Видимость списка
    };
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },
    addPoints() {
      if (this.currentPoint.text) {
        this.currentPoint.pointId = Date.now();
        this.currentPoint.isChecked = false;
        // Добавляем текущую задачу к текущей заметке
        this.currentNote.points.push({ pointId: this.currentPoint.pointId, text: this.currentPoint.text, isChecked:this.currentPoint.isChecked });
        this.currentPoint.text = ''; // Очищаем текст для новой задачи
        this.isListVisible = true;

      }
    },
    addNewNote() {
      if (this.currentNote.title ) {
        this.currentNote.id = Date.now();
        this.notes.push(this.currentNote);
        this.currentNote = { title: '', points: [] }; // Создаем новые объекты для текущей заметки и элемента
        this.currentPoint.text = '';
        this.isListVisible = false; // Скрываем список после добавления заметки

        this.saveDataToLocalStorage();
        this.closeModal();
      }
    },
    saveDataToLocalStorage() {
      try {
        localStorage.setItem('notes', JSON.stringify(this.notes));
        console.log('Ура, сохранилось');
      } catch (error) {
        console.error('ОШибка:', error);
      }
    }
  },
}
</script>

<style scoped>

.modal-container-back-screen {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.30);
  z-index: 999;
}

.modal-container {
  display: inline-flex;
  padding: 50px 45px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: max-content;
  height: max-content;
  margin: auto;
  border-radius: 35px;
  background: white;
}

.modal-header {
  display: flex;
  width: 512px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}

.modal-header__title {
  font-size: 24px;
  color: #333333;
  font-weight: 700;
  letter-spacing: 1.2px;
}

.modal-header__line {
  width: 512px;
  height: 1px;
  background: #D1D5DB;
}

.container-edit {
  display: flex;
  width: 512px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.modal-content-setname {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.modal-content-setname__text {
  color: #333333;
  font-size: 18px;
  font-weight: 500;
}

.modal-content-setname__input {
  border-radius: 10px;
  width: 512px;
  height: 48px;
  border: 1px solid #DFDFDF;
  color: #9098a9;
  padding-left: 15px;
  font-size: 18px;
}

.modal-content-view-add {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
}

.modal-content-view-add-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2px;
  gap: 24px;
}

.modal-content-add-new-element {
  display: flex;
  width: 512px;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
}

.modal-content-add-new-element__input {
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border: 1px solid #DFDFDF;
  border-radius: 10px;
  color: #9098a9;
  font-size: 18px;
  padding: 10px 10px 10px 15px;
  background: white;
}


.modal-content-event {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

.modal-content-event__button-success {
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

.modal-content-event__button-success:hover {
  background: linear-gradient(90deg, #14b8a6 0%, #2DD4BF 100%);
}

.modal-content-event__button-cancel {
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

.modal-content-event__button-cancel:hover {
  background: linear-gradient(90deg, #a3a3a3 0%, #d4d4d4 100%);
}
</style>