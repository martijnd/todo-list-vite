<template>
  <Navbar />
  <div class="container mx-auto">
    <TodoList />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue"
import TodoList from "./components/TodoList.vue"
import { defineComponent } from "vue"

export default defineComponent({
  name: "App",
  components: {
    TodoList,
    Navbar
  }
})
</script>
