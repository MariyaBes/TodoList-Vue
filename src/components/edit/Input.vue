<template>
  <div class="container-edit-change-title">
    <div class="container-edit-change-title__title">
        <span class="container-edit-change-title__title-text">
          {{ titleInput.title }}
        </span>
    </div>

    <input
        type="text"
        placeholder="Введите название..."
        class="container-edit-change-title__input"
        v-model='inputValue'
        @input="value"
    >
  </div>
</template>

<script>
export default {
  props: {
    titleInput: {
      type: Object
    },
    note: {
      type: Object
    },
    currTextPoint: {
      type: String
    }
  },
  data(){
    return {
      inputValue: this.titleInput.id === 1 ?
          this.note.title :
          this.titleInput.id === 2 ? this.currTextPoint : ''
    }
  },
  methods: {
    value() {
      this.$emit('input-value', this.inputValue);
    }
  }
}
</script>

<style scoped>
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