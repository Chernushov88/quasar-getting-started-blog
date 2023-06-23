<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          dense
          placeholder="Search"
          borderless
          class="full-width"
          :model-value="search" >

          <template #append>
            <q-icon name="mdi-magnify"/>
          </template>
        </q-input>
      </q-toolbar>
      <q-list bordered>
        <q-item>
          <q-item-section side>
            <q-checkbox :model-value="true" />
          </q-item-section>
          <q-item-section>
            Go Shopping
          </q-item-section>
          <q-item-section>
            <q-btn
            flat
            round
            size="sm"
            icon="mdi-delete"/>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus deleniti dignissimos dolore
              doloribus enim et ex magnam magni minus natus obcaecati, placeat porro praesentium quibusdam rem sunt
              tempore veritatis.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus deleniti dignissimos dolore
              doloribus enim et ex magnam magni minus natus obcaecati, placeat porro praesentium quibusdam rem sunt
              tempore veritatis.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus deleniti dignissimos dolore
              doloribus enim et ex magnam magni minus natus obcaecati, placeat porro praesentium quibusdam rem sunt
              tempore veritatis.
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <q-btn
          fab
          style="margin-bottom: -42px"
          class="q-ml-md"
          color="secondary"
          icon="mdi-plus"></q-btn>
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { colors } from 'quasar'
const { getPaletteColor } = colors

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    console.log(getPaletteColor('blue-9'))
  }
})
</script>

<style lang="scss">

</style>
