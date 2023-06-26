<template>
  <q-card
    class="q-pa-lg full-width text-center column items-center"
    style="max-width: 350px;"
    :style="{
      borderBottom: `6px solid ${getPaletteColor('purple-4')}`
    }"
  >
    <q-img
      style="max-width: 180px; border-radius: 50%;"
      :src="imgSrc"
    />
    <div><strong>Ukrainian Insurgent Army</strong></div>
    <div>
      The Ukrainian Insurgent Army (Ukrainian: Українська повстанська армія, УПА, romanized: Ukrayins'ka Povstans'ka Armiia, abbreviated UPA) was a Ukrainian nationalist paramilitary and partisan formation founded by the Organization of Ukrainian Nationalists on October 14, 1942.[1] During World War II, it was engaged in guerrilla warfare against the Soviet Union, the Polish Underground State, Communist Poland, and Nazi Germany.[2]
    </div>
  </q-card>
</template>

<script>
import { colors } from 'quasar'
const { getPaletteColor } = colors

export default {
  // name: 'ComponentName',
  setup () {
    const imgSrc = require('assets/upa.jpg')

    return {
      imgSrc,
      getPaletteColor
    }
  }
}
</script>
