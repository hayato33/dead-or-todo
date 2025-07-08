import { ref, computed } from 'vue'

/**
 * タスクの型定義
 */
export interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

// グローバルな状態（全コンポーネント間で共有）
const tasks = ref<Task[]>([])
const nextId = ref(1)

// 計算プロパティ（グローバル状態に基づく）
const completedTasksCount = computed(() => tasks.value.filter((task) => task.completed).length)

const pendingTasksCount = computed(() => tasks.value.filter((task) => !task.completed).length)

const totalTasksCount = computed(() => tasks.value.length)

/**
 * localStorageからタスクを読み込み
 */
const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    try {
      const parsed = JSON.parse(savedTasks) as Array<
        Omit<Task, 'createdAt'> & { createdAt: string }
      >
      tasks.value = parsed.map((task) => ({
        ...task,
        createdAt: new Date(task.createdAt),
      }))
      nextId.value = Math.max(...tasks.value.map((t) => t.id), 0) + 1
    } catch (error) {
      console.error('タスクの読み込みに失敗しました:', error)
      tasks.value = []
      nextId.value = 1
    }
  }
}

/**
 * localStorageにタスクを保存
 */
const saveTasks = () => {
  try {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  } catch (error) {
    console.error('タスクの保存に失敗しました:', error)
  }
}

/**
 * 新しいタスクを追加
 * @param title タスクのタイトル
 */
const addTask = (title: string) => {
  const newTask: Task = {
    id: nextId.value++,
    title: title.trim(),
    completed: false,
    createdAt: new Date(),
  }
  tasks.value.push(newTask)
  saveTasks()
}

/**
 * タスクの完了状態を切り替え
 * @param id タスクのID
 */
const toggleTask = (id: number) => {
  const task = tasks.value.find((t) => t.id === id)
  if (task) {
    task.completed = !task.completed
    saveTasks()
  }
}

/**
 * タスク管理のためのComposable関数
 * MVP版：シンプルなlocalStorage連携 + グローバル状態共有
 */
export function useTasks() {
  return {
    // 状態（グローバルで共有）
    tasks,

    // 計算プロパティ（グローバル状態ベース）
    completedTasksCount,
    pendingTasksCount,
    totalTasksCount,

    // メソッド
    loadTasks,
    addTask,
    toggleTask,
  }
}
