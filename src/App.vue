<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm border-b border-gray-200 py-4">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-2xl font-bold text-gray-900 text-center">Todo App</h1>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/**
 * メインアプリケーションのスタイル
 * MVP用のシンプルなレイアウト
 */
</style>
