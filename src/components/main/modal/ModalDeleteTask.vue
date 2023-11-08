<template>
  <div
      v-if="show"
      class="modal-container-back-screen"
      @click.stop="isVisible"
  >
    <div @click.stop class="modal-container">
      <div class="modal-container-header">
        <h1 class="modal-container-header__title">
          Удалить заметку
        </h1>
        <h1 class="modal-container-header__warning">Вы действительно хотите удалить данную заметку? </h1>
      </div>
      <div class="modal-content-event">
        <button @click="deleteNote"
                class="modal-content-event__button-danger">Удалить</button>
        <button @click="isVisible" class="modal-content-event__button-cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: Object
    }
  },
  methods: {
    isVisible() {
      this.$emit('update:show', false);
    },
    deleteNote() {
      this.$emit('deleteNote');
      this.isVisible();
    }
  }
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

.modal-container-header {
  display: flex;
  width: 512px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
}

.modal-container-header__title {
  width: 410px;
  color: #333333;
  font-size: 24px;
  font-weight: 700;
}

.modal-container-header__warning {
  width: 410px;
  color: #333333;
  font-size: 20px;
  font-weight: 500;
}

.modal-content-event {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

.modal-content-event__button-danger {
  display: flex;
  padding: 13px 79px;
  justify-content: center;
  align-self: center;
  gap: 10px;
  flex: 1 0 0;
  border: none;
  border-radius: 16px;
  background: linear-gradient(90deg, #EF4444 0%, #F87171 100%);

  color: white;
  font-size: 18px;
  font-weight: 700;

  cursor: pointer;
}

.modal-content-event__button-danger:hover {
  background: linear-gradient(90deg, #dc2626 0%, #EF4444 100%);
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