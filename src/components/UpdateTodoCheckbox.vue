<template>
  <q-checkbox
    :model-value="!!todo.complete"
    :disable="loading"
    @update:model-value="handleInput"
  />
</template>

<script>
import { $update } from 'src/stores/todoStore'
import { ref } from 'vue'
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  setup (props) {
    const loading = ref(false)
    const handleInput = (value) => {
      loading.value = true
      $update({
        id: props.todo.id,
        complete: value
      })
        .finally(() => {
          loading.value = false
        })
    }
    return {
      loading,
      handleInput
    }
  }
}
</script>
