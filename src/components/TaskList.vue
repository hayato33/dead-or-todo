<template>
  <div class="task-list">
    <!-- タスクがある場合のリスト -->
    <ul v-if="tasks.length > 0" class="tasks">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>

    <!-- タスクがない場合の空状態メッセージ -->
    <div v-else class="empty-state">
      <p>タスク未登録です</p>
    </div>

    <!-- タスク統計（タスクがある場合のみ表示） -->
    <div v-if="tasks.length > 0" class="task-stats">
      <div class="stats-content">
        <span class="stat-item">
          総タスク数: <span class="stat-value">{{ totalTasksCount }}</span>
        </span>
        <span class="stat-item">
          完了: <span class="stat-value completed">{{ completedTasksCount }}</span> / 未完了:
          <span class="stat-value pending">{{ pendingTasksCount }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasks } from '@/composables/useTasks'
import TaskItem from '@/components/TaskItem.vue'

/**
 * タスクリストコンポーネント
 * タスクの一覧表示と統計情報を提供
 */
const { tasks, completedTasksCount, pendingTasksCount, totalTasksCount } = useTasks()
</script>

<style scoped>
.task-list {
  margin-top: 2rem;
}

.tasks {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.empty-state {
  text-align: center;
  padding: 2rem 0;
}

.empty-state p {
  color: #6b7280;
  font-size: 1rem;
}

.task-stats {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
}

.stats-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.stat-item {
  color: #4b5563;
}

.stat-value {
  font-weight: 600;
  color: #111827;
}

.stat-value.completed {
  color: #10b981;
}

.stat-value.pending {
  color: #3b82f6;
}
</style>
