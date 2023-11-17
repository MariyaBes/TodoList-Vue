<template>
  <button @click="addPoints" class="modal-content-event__button-add">
    <IconAdd class="modal-content-event__icon-plus"/>
    Добавить
  </button>
</template>

<script>
import IconAdd from "@/components/icons/IconAdd.vue";

export default {
  components: {IconAdd},
  methods: {
    addPoints() {
      this.$emit('addPoints')
    }
  }
}
</script>

<style scoped>
.modal-content-event__button-add {
  display: flex;
  color: white;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  gap: 5px;
  border: none;
  padding: 10px 30px;
  border-radius: 16px;
  cursor: pointer;
  background: linear-gradient(90deg, #2DD4BF 0%, #5EEAD4 100%);
}

.modal-content-event__icon-plus {
  fill: white;
}

.modal-content-event__button-add:hover{
  background: linear-gradient(90deg, #14b8a6 0%, #2DD4BF 100%);
}
</style>