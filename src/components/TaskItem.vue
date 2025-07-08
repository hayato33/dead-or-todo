<template>
  <li :class="{ 'task-completed': task.completed }" class="task-item">
    <div class="task-content" @click="toggleTask">
      <input type="checkbox" :checked="task.completed" @change="toggleTask" class="task-checkbox" />
      <span :class="{ 'completed-text': task.completed }" class="task-title">
        {{ task.title }}
      </span>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { useTasks } from '@/composables/useTasks'
import type { Task } from '@/composables/useTasks'

const { toggleTask: toggleTaskInStore } = useTasks()

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
})

/**
 * タスクの完了状態を切り替え
 */
const toggleTask = () => {
  toggleTaskInStore(props.task.id)
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  transition: all 0.2s;
}

.task-item:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.task-completed {
  opacity: 0.7;
  background-color: #f9fafb;
}

.task-content {
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.task-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
}

.task-title {
  margin-left: 1rem;
  font-size: 1rem;
  flex-grow: 1;
  transition: all 0.2s;
}

.completed-text {
  text-decoration: line-through;
  color: #6b7280;
}
</style>
