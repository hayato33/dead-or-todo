<template>
  <div class="task-input">
    <form @submit.prevent="addTask" class="task-form">
      <input v-model="title" placeholder="新しいタスクを入力..." class="input-field" />
      <button type="submit" :disabled="!title.trim()" class="submit-button">追加</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasks } from '@/composables/useTasks'

/**
 * タスク入力コンポーネント
 * 新しいタスクの追加機能を提供
 */
const title = ref('')
const { addTask: addTaskToStore } = useTasks()

/**
 * 新しいタスクを追加
 * 空文字列やスペースのみの場合は追加しない
 */
const addTask = () => {
  if (title.value.trim()) {
    addTaskToStore(title.value.trim())
    title.value = ''
  }
}
</script>

<style scoped>
.task-input {
  margin-bottom: 2rem;
}

.task-form {
  display: flex;
  gap: 1rem;
}

.input-field {
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.input-field:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.submit-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-button:hover:not(:disabled) {
  background-color: #4338ca;
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
