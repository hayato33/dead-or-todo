<script setup lang="ts">
import TaskInput from '@/components/TaskInput.vue'
import TaskList from '@/components/TaskList.vue'
</script>

<template>
  <div class="card">
    <TaskInput />
    <TaskList />
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>
