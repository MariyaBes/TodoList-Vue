<template>
  <div class="task-content-container">
    <ul class="task-content-points-list">
      <li v-for="(point, pointId) in visiblePoints" :key="pointId" class="task-content-points-list__item">
        <label :for="'checkbox-' + pointId" class="points-list__label">
          <div v-if="point.isChecked === true">
            <span class="cbx-true">
              <IconDone />
            </span>
          </div>

          <div v-else>
            <span class="cbx">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.75" stroke="#333333" stroke-width="1.5"/>
              </svg>
            </span>
          </div>
          <span class="points-list__label-text">{{ point.text }}</span>
        </label>
      </li>
      <li v-if="maxVisiblePoints < items.points.length">
        <span class="task-content-points-list__item-length">...</span>
      </li>
    </ul>
  </div>
</template>

<script>
import IconDone from "@/components/icons/IconDone.vue";

export default {
  components: {IconDone},
  props: {
    items: {
      type: Object,
      required: true
    },
    maxVisiblePoints: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    visiblePoints() {
      return this.items.points.slice(0, this.maxVisiblePoints);
    },
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

.task-content-points-list__item-length {
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  padding: 6px;
}

.task-content-container .cbx-true {
  display: flex;
  width: 18px;
  height: 18px;
  margin-right: 6px;
  justify-content: center;
  align-items: center;
}

.task-content-container .cbx {
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  margin-left: 1px;
  align-items: center;
  justify-content: center;
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