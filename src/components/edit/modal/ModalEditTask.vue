<template>
  <form @submit.prevent="updateTaskText">
    <div v-if="show" class="modal-container-back-screen" @click.stop="closeModal">
      <div @click.stop class="modal-container">

        <div class="modal-header">
          <h2 class="modal-header__title">Отредактировать задачу</h2>
          <span class="modal-header__line"></span>
        </div>

        <div class="container-edit">
          <div class="container-edit-change-title">
            <div class="container-edit-change-title__title">
              <span class="container-edit-change-title__title-text">
                Текущая задача
              </span>
            </div>

            <input
                type="text"
                placeholder="Изменить название..."
                class="container-edit-change-title__input"
                v-model="localEditText"
            >
          </div>
        </div>

        <span class="modal-header__line"></span>

        <div class="modal-content-event">
          <button @click="updateTaskText" class="modal-content-event__button-success">Изменить</button>
          <button @click="closeModal" class="modal-content-event__button-cancel">Отмена</button>
        </div>

      </div>
    </div>
  </form>
</template>

<script>

export default {
  data() {
    return {
      localEditText: this.editText,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    pointIndex: {
      type: Number
    },
    editText: {
      type: String,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false);
    },

    updateTaskText() {
      this.$emit('updateText', this.localEditText, this.pointIndex);
      this.closeModal();
    },
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


