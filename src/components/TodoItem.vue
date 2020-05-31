<template>
  <div class="mb-2">
    <label :for="`todoItem${todo.id}`" class="text-lg leading-8 font-medium">
      <input
        class="form-checkbox mr-2"
        :id="`todoItem${todo.id}`"
        type="checkbox"
        :checked="todo.is_done"
        @click="onChange"
      />
      {{ todo.title }}
    </label>
  </div>
</template>

<script lang="ts">
import { ITodo } from "./TodoList.vue"
import { defineComponent, ref, watchEffect } from "vue"
export default defineComponent({
  props: {
    todo: {
      type: Object as () => ITodo
    }
  },

  setup(props, { emit }) {
    const isChecked = ref(props.todo.is_done)

    function onChange() {
      isChecked.value = !isChecked.value
      emit("toggle", isChecked.value)
    }

    return {
      onChange,
      isChecked
    }
  }
})
</script>

<style>
</style>