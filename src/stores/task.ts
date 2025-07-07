import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as { id: number; title: string; completed: boolean }[],
    nextId: 1
  }),
  actions: {
    addTask(title: string) {
      this.tasks.push({ id: this.nextId++, title, completed: false })
    }
  }
})
