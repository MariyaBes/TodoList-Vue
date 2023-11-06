<template>
  <div class="crumb">
    <span class="crumb-line"></span>
    <div class="crumb-title">
      <IconBurger class="crumb-title__burger" />
      <p class="crumb-title__text">{{ crumbTitle }}</p>
    </div>
    <span class="crumb-line"></span>
  </div>
</template>

<script setup>
import IconBurger from "@/components/icons/IconBurger.vue";
import { defineProps, computed } from "vue";

const props = defineProps({
  titleCrumb: {
    type: Array,
    required: true,
  },
  crumbId: {
    type: Number,
    required: true,
  },
});

const crumbTitle = computed(() => {
  const crumb = props.titleCrumb.find(item => item.id === props.crumbId);
  return crumb ? crumb.title : "";
});
</script>


<style scoped>

.crumb {
  display: -webkit-flex;
  width: 90%;
  padding: 8px 0;
  align-items: center;
  gap: 7px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

@media (min-width: 1700px) {
  .crumb {
    display: flex;
    width: 1701px;
    padding: 8px 0;
    align-items: center;
    gap: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 18px;
  }

  .crumb-title__text {
    color: #333333;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1.2px;
  }

}

.crumb-line {
  width: 100%;
  height: 1px;
  background: #D1D5DB;
}

.crumb-title {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}

.crumb-title__text {
  color: #333333;
  font-size: 20px;
  font-weight: bold;
}

</style>