<template>
  <div class="notification-onStack" v-if="undoStack.length > 0">
    <div class="notification-onStack-content">
      <p class="notification-onStack-content__title">Вернуть заметку?</p>
      <button @click="undo" class="notification-onStack-content__button">
        Отменить действие
        <IconReturn />
      </button>

      <button @click="closeUndo" class="notification-onStack-content-close">X</button>
    </div>
  </div>
</template>

<script>
import IconReturn from "@/components/icons/IconReturn.vue";

export default {
  components: {IconReturn},
  props: {
    undoStack: {
      type: Array
    }
  },
  methods: {
    closeUndo() {
      this.$emit('closeUndo');
    },

    undo() {
      this.$emit('undo');
    }
  }
}
</script>

<style scoped>

.notification-onStack {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 270px;
  height: 120px;
  padding: 40px;
  border-radius: 15px;
  justify-content: center;
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #eef1f3;
  box-shadow: 0 11px 35px 0 rgba(0, 0, 0, 0.15);
}

.notification-onStack-content {
  display: flex;
  flex-direction: column;
  margin-left: -5px;
  gap: 15px;
  align-items: center;
}

.notification-onStack-content__title {
  color: #333333;
  font-size: 14px;
}

.notification-onStack-content__button {
  display: flex;
  gap: 5px;
  color: #333333;
  background: #94a3b8;
  cursor: pointer;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #e0e1e6 0%, #d1d5db 100%);
  border-radius: 15px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
}

.notification-onStack-content__button:hover {
  transition: all ease-in-out 0.3s;
  background: linear-gradient(90deg, #d1d5db 0%, #cacfd5 100%);
}

.notification-onStack-content-close {
  border: none;
  position: absolute;
  background: none;
  font-size: 14px;
  top: 10px;
  right: 10px;
  color: hsl(0, 0%, 47%);
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  padding: 1px 5px;
}

.notification-onStack-content-close:hover {
  transition: all ease-in-out 0.3s;
  background: #eef1f3;
}
</style>