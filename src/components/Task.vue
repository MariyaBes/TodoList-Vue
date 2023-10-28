<template>
  <div class="task-container">
    <div class="task-header">
      <p class="task-header__text">Обсудить и обозначить
        задачи проекта</p>
      <IconDotsVertical class="task-header__icon"/>
    </div>

    <div class="task-content">
      <div class="task-content-container">
        <input type="checkbox" id="todo-1" class="task-content-container__checkbox">
        <label for="todo-1" class="task-content-container__item">
            <span class="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1"></polyline>
              </svg>
            </span>
          <span class="task-content-container__text">Сформировать новый функционал</span>
        </label>
      </div>

      <div class="task-content-container">
        <input type="checkbox" id="todo-2" class="task-content-container__checkbox">
        <label for="todo-2" class="task-content-container__item">
            <span class="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1"></polyline>
              </svg>
            </span>
          <span class="task-content-container__text">Определить и назначить роли</span>
        </label>
      </div>

      <div class="task-content-container">
        <input type="checkbox" id="todo-3" class="task-content-container__checkbox">
        <label for="todo-3" class="task-content-container__item">
            <span class="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1"></polyline>
              </svg>
            </span>
          <span class="task-content-container__text">Обозначить текущий статус проекта</span>
        </label>
      </div>

    </div>
    <button class="task-button">
      <span class="task-button-edit">Редактировать</span>
    </button>
  </div>
</template>
<script setup>
import IconDotsVertical from "@/components/icons/IconDotsVertical.vue";
</script>