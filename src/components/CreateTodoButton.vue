<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
// import { ref, computed } from 'vue'
// import { useQuasar } from 'quasar'

export default {
  // setup () {
  //   const $q = useQuasar()
  //   const moreContent = ref(true)
  //
  //   return {
  //     createTodo () {
  //       $q.notify({
  //         title: 'Create Todo',
  //         prompt: {
  //           model: '',
  //           type: 'text'
  //         }
  //       })
  //     },
  //     handleButtonClicked () {
  //       $q.dialog({
  //         title: 'Create Todo',
  //         prompt: {
  //           model: '',
  //           type: 'text'
  //         }
  //       })
  //     }
  //   }
  // }
  // }
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        }
      })
        .onOk(this.createTodo)
    },
    createTodo (data) {
      this.chekedValue(data)
    },
    chekedValue (value) {
      if (value.length > 3) {
        this.$q.notify({
          message: 'Todo Created!',
          icon: 'mdi-check',
          color: 'positive'
        })
      } else {
        this.$q.notify({
          message: `Error Todo is note ${value}`,
          icon: 'mdi-account',
          color: 'negative'
        })
      }
    }
  }
}
</script>
