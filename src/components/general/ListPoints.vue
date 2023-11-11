<template>
  <div class="task-content-container">
    <ul class="task-content-points-list">
      <li v-for="(point, pointId) in items.points" :key="pointId" class="task-content-points-list__item">
        <input type="checkbox" id="checkbox" :checked="point.completed" class="points-list__checkbox">
        <label :for="'checkbox-' + pointId" class="points-list__label">
          <span class="cbx">
            <svg width="14px" height="12px" viewBox="0 0 14 12">
              <polyline points="1 7.6 5 11 13 1"></polyline>
            </svg>
          </span>
          <span class="points-list__label-text">{{ point.text }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.task-content-container{
  display: flex;
  width: 100%;
}

.task-content-points-list {
  list-style-type: none;
  width: 100%;
  padding-left: 0;
}

.points-list__checkbox {
  display: none;
}

.points-list__label {
  display: flex;
  width: 100%;
  align-items: center;
  cursor: default;
  margin-bottom: 2px;
}

.task-content-points-list__item {
  padding: 3px;
}

.task-content-container .cbx {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  border: 1px solid #9098a9;
  border-radius: 10px;
}

.task-content-container .cbx svg {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform-origin: center;
}

.task-content-container .point-checkbox:checked + .point-label .cbx svg polyline {
  display: block;
}

.points-list__label-text {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
}
</style>