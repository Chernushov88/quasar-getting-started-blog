<template>
  <q-page padding class="flex flex-center">
    <div class="full-width" style="max-width: 500px;">
      <h3 class="q-my-md text-center">login</h3>
      <q-card>
        <q-form>
          <q-card-section>
            <q-input filled label="email" placeholder="email@example.com" class="q-mb-md"/>
            <q-input filled label="password" type="password" class="q-mb-sm" />
            <q-checkbox label="remember me" :model-value="true" />
          </q-card-section>
          <q-btn label="login" class="full-width" color="primary"></q-btn>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
