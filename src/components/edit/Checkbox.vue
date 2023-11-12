<template>
  <div class="task-content-container">
      <ul class="task-content-points-list">
        <li
            v-for="(point, pointIndex) in notes?.points"
            :key="pointIndex"
            class="task-content-points-list__item"
        >
          <div class="task-content-points-list__item-space">
            <input
                type="checkbox"
                :id="'id-' + pointIndex"
                class="points-list__checkbox"
                v-model="point.isChecked"
                @click="changeCheckbox(point)"
            >
            <label :for="'id-' + pointIndex" class="points-list__label" @click="console.log(pointIndex, point.pointId)">
              <span class="points-list__label-text">{{ point.text }}</span>
            </label>

            <div class="task-content-container__absolute">
              <ModalEditTask
                  v-if="isVisible && editText !== undefined"
                  v-model:show="isVisible"
                  @updateText="updateText"
                  :pointIndex="modalPointIndex"
                  :editText="editText"
              />
            </div>
          </div>

          <div class="task-content-points-list__item-event" >
            <IconEdit class="points-list__edit-point" @click="() => {openModal(pointIndex); console.log('openModal[pointIndex] = ', pointIndex)}"/>
            <span @click="deletePoint(pointIndex)" class="points-list__delete-point">X</span>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import IconEdit from "@/components/icons/IconEdit.vue";
import ModalEditTask from "@/components/main/modal/ModalEditTask.vue";

export default {
  components: {ModalEditTask, IconEdit},
  data() {
    return {
      isChecked: false,
      isVisible: false,
      editText: '',
      modalPointIndex: null,
    }
  },
  props: {
    notes: Object,
  },
  methods: {
    changeCheckbox(point) {
      point.isChecked = !point.isChecked;
    },
    openModal(pointIndex) {
      this.isVisible = true;
      this.editText = this.notes.points[pointIndex].text;
      this.modalPointIndex = pointIndex; // устанавливаем pointIndex
      console.log('pointIndex = ', pointIndex, '\n', 'editText = ', this.editText, '\n', 'editText.pointIndex = ', this.editText[pointIndex])
    },
    updateText(newText, pointIndex) {
      console.log(newText, pointIndex);
      this.notes.points[pointIndex].text = newText;
    },
    deletePoint(point) {
      this.notes.points.splice(point, 1);
      console.log(point );
    },
    getPointIndex() {
      return this.pointIndex;
    },
  }
}
</script>

<style scoped>

.task-content-container{
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.task-content-container__absolute{
  position: absolute;
}

.task-content-points-list {
  list-style-type: none;
  width: 100%;
  padding-left: 0;
}

.task-content-points-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  margin-bottom: 5px;
  margin-top: 5px;
}

.points-list__checkbox {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.points-list__label-text {
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
  text-decoration: none;
}

.points-list__checkbox:checked + .points-list__label .points-list__label-text {
  text-decoration: line-through;
  color: #9098a9;
}

.points-list__delete-point {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #EF4444;
  padding: 3px;
  width: 22px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}


.points-list__delete-point:hover {
  background: #eef1f3;
  transition: all ease-in-out 0.3s;
}
.task-content-points-list__item-event{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.points-list__edit-point {
  border-radius: 5px;
  cursor: pointer;
  padding: 2px;
}

.points-list__edit-point:hover {
  background: #eef1f3;
  transition: all ease-in-out 0.3s;
}
</style>