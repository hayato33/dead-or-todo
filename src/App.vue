<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useTasks } from '@/composables/useTasks'

/**
 * メインアプリケーションコンポーネント
 * アプリケーション起動時にタスクをlocalStorageから読み込み
 */
const { loadTasks } = useTasks()

onMounted(() => {
  loadTasks()
})
</script>

<template>
  <div id="app">
    <!-- ヘッダー -->
    <header>
      <div class="header-container">
        <!-- タイトル -->
        <h1>Dead or Todo</h1>
        <p>今日やるべきことを整理しよう</p>
      </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
/**
 * メインアプリケーションのスタイル
 * シンプルで必要最低限のスタイル
 */
#app {
  min-height: 100vh;
  background-color: #f5f5f5;
}

header {
  background-color: #4f46e5;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  text-align: center;
}

h1 {
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

main {
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
