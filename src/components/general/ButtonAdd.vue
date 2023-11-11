<template>
  <button @click="addPoints" class="modal-content-event__button-add">
    <IconAdd class="modal-content-event__icon-plus"/>
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
  border: none;
  padding: 10px 30px;
  border-radius: 16px;
  cursor: pointer;
  background: linear-gradient(90deg, #D9D9D9 0%, #DFDFDF 100%);
}

.modal-content-event__icon-plus {
  fill: white;
}

.modal-content-event__button-add:hover{
  background: linear-gradient(90deg, #2DD4BF 0%, #5EEAD4 100%);
}
</style>