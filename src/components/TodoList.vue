<template>
  <div class="p-4 flex flex-col sm:flex-row">
    <div class="p-4">
      <div class="bg-gray-200 p-4 rounded mb-4">
        <h2 class="mb-2 font-bold text-xl text-indigo-800">Add a todo</h2>
        <input
          @keypress.enter="addTodo"
          v-model="newTodo"
          :class="errorMessage.length ? 'border border-red-400' : ''"
          class="w-full form-input mb-4 outline-none focus:outline-none"
        />
        <div id="error" v-if="errorMessage.length">{{ errorMessage }}</div>
      </div>
      <TodoItem
        :todo="todo"
        v-for="todo in todos"
        :key="todo.title"
        @toggle="onToggle($event, todo)"
      />
    </div>
    <div class="p-4">
      <h2 class="font-bold text-xl text-indigo-800">Todo list</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.is_done ? '✔' : '❌' }} {{todo.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import TodoItem from "./TodoItem.vue"

export interface ITodo {
  id: number
  title: string
  is_done: boolean
}

export default defineComponent({
  components: {
    TodoItem
  },
  setup() {
    const todos = ref<ITodo[]>([
      { id: 1, title: "Work", is_done: false },
      { id: 2, title: "Sleep", is_done: true }
    ])

    const newTodo = ref("")
    const errorMessage = ref("")

    function onToggle(isChecked: boolean, finishedTodo: ITodo) {
      todos.value = todos.value.map(todo =>
        todo.title === finishedTodo.title
          ? { ...todo, is_done: isChecked }
          : todo
      )
    }

    function addTodo() {
      errorMessage.value = ""

      if (exists(newTodo.value)) {
        errorMessage.value = "❌ Already exists!"
        return
      }

      if (isEmpty(newTodo.value)) {
        errorMessage.value = "❌ Too short!"
        return
      }

      todos.value = [
        ...todos.value,
        { id: todos.value.length + 1, title: newTodo.value, is_done: false }
      ]
      newTodo.value = ""
    }

    function isEmpty(title: string) {
      return !Boolean(title.length)
    }

    function exists(title: string) {
      return todos.value.findIndex(todo => todo.title === title) !== -1
    }

    return {
      todos,
      onToggle,
      addTodo,
      newTodo,
      errorMessage
    }
  }
})
</script>

<style>
</style>  