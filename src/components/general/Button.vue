<template>
  <div class="modal-content-event">
    <button @click="handleAddNewNote" class="modal-content-event__button-success">{{ titleButton.title }}</button>
    <button @click="handleCloseModal" class="modal-content-event__button-cancel">{{ titleButton.title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    closeModal: {
      type: Function
    },
    addNewNote: {
      type: Function
    },
    titleButton: {
      type: Object
    }
  },
  methods: {
    handleCloseModal() {
      this.closeModal();
    },
    handleAddNewNote() {
      this.addNewNote();
    }
  }
}
</script>

<style scoped>
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