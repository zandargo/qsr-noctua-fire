<template>
  <div class="row q-pa-none full-width justify-center">
    <q-card class="col-12" style="max-width: 600px">
      <q-card-section
        class="text-white q-py-sm row"
        :style="`background-color: ${color}`"
      >
        <div class=" col-grow text-h3 pet-caps q-py-none">{{ title }}</div>
        <q-btn
        dense flat outline
          class="col-1"
          color="white"
          icon="palette"
          size="sm"
          @click="togglePalette()"
        />
      </q-card-section>

      <q-separator />

      <q-card-section
        v-if="title === storeApp.subActivePalette"
        class="q-py-none"
      >
        <q-color
          v-model="color"
          no-header
          no-footer
          default-view="palette"
          format-model="hex"
          style=""
          class=""
          :palette="[
            '#7B1FA2',
            '#1976D2',
            '#0097A7',
            '#00796B',
            '#388E3C',
            '#FBC02D',
            '#F57C00',
            '#D32F2F',
            '#5D4037',
            '#455A64',
          ]"
        />
      </q-card-section>

      <q-card-section class="">
        <div v-if="contents" >
          <div
            v-for="(content, index) in contents"
            :key="content.type"
            class="row q-mb-sm"
          >
            <q-checkbox
              dense
              v-model="test"
              label="Tipo"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { getCssVar } from 'quasar'
import { ref } from 'vue'
import { useStoreApp } from 'stores/storeApp'

const storeApp = useStoreApp()


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: getCssVar('primary')
  },
  caption: {
    type: String,
    default: ''
  },
  contents: {
    type: Array,
    required: false
  },

})

const test = true

const togglePalette = () => {
  if (storeApp.subActivePalette === props.title) {
    storeApp.subActivePalette = ''
  } else {
    storeApp.subActivePalette = props.title
  }
}


</script>

<style lang="scss" scoped>

</style>

