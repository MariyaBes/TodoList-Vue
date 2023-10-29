<template>
  <header class="header">
    <div class="header-title">
      <p class="header-text">Заметки</p>
      <IconCheck class="header-icon"/>
    </div>
  </header>

  <Crumb/>

  <div class="task-area">
    <Task />
    <Task />
    <Task />
    <Task />
    <Task />

    <AddNewTask/>
  </div>

</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import IconCheck from "@/components/icons/IconCheck.vue";
import Task from "@/components/Task.vue";
import AddNewTask from "@/components/AddNewTask.vue";
import Crumb from "@/components/Crumb.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {IconCheck, Crumb, Task, AddNewTask},

})


</script>
