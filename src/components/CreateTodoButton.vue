<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
import { useQuasar } from 'quasar'
import { addTodo } from 'src/stores/todoStore'

export default {
  setup () {
    const $q = useQuasar()

    const handleButtonClicked = () => {
      $q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        }
      })
        .onOk(createTodo)
    }

    const createTodo = (todoTitle) => {
      if (todoTitle.length > 3) {
        addTodo({
          id: Date.now(),
          label: todoTitle,
          completed: false
        })
      } else {
        $q.notify({
          message: 'Todo Created!',
          icon: 'mdi-check',
          color: 'warning'
        })
      }
    }

    return { handleButtonClicked }
  }
}
</script>
