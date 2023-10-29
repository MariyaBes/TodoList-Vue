<template>
  <div class="task-content-container" v-for="item in items" :key="item.id">
    <input type="checkbox" :id="'id-' + item.id" class="task-content-container__checkbox">
    <label :for="'id-' + item.id" class="task-content-container__item">
            <span class="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1"></polyline>
              </svg>
            </span>
      <span class="task-content-container__text">{{ item.title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  }
}
</script>

<style scoped>
.task-content-container input[type="checkbox"] {
  display: none;
}

.task-content-container .cbx {
  display: inline-flex;
  width: 15px;
  height: 15px;
  margin-right: 6px;
  border: 1px solid #9098a9;
  border-radius: 10px;
  cursor: pointer;
}

.task-content-container .cbx svg {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: center;
  transform: scale(0);
  transition: all 0.4s ease;
  transition-delay: 0.1s;
}

.task-content-container .task-content-container__item .cbx svg polyline {
  stroke-width: 2;
  stroke: #2DD4BF;
}

.task-content-container .task-content-container__item .task-content-container__text {
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
}

.task-content-container .task-content-container__item input {
  display: none;
}

.task-content-container input[type="checkbox"]:checked + .task-content-container__item .cbx {
  border-color: transparent;
}

.task-content-container input[type="checkbox"]:checked + .task-content-container__item .cbx svg {
  transform: scale(1);
  stroke: #2DD4BF;
}

.task-content-container input[type="checkbox"]:checked + .task-content-container__item .task-content-container__text {
  color: #9098a9;
  text-decoration: line-through;
}

.task-content-container__text {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.3s ease;
}
</style>