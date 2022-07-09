<template>
  <div class="row q-pa-none full-width justify-center">
    <q-card class="col-12" style="max-width: 600px">
      <q-card-section
        class="text-white q-py-sm row"
        :style="`background-color: ${color}`"
      >
        <div class=" col-grow text-h3 pet-caps q-py-none">
          {{ title }}
        </div>
        <q-icon name="palette">
          <q-popup-proxy style="transform: scale(1.2) translate(-10%, 10%)">
            <q-color
              v-model="color"
              no-header
              no-footer
              default-view="palette"
              format-model="hex"
              style=""
              class=""
              @update:model-value="pickColor(color)"
            />
          </q-popup-proxy>
        </q-icon>

      </q-card-section>

      <q-separator />
      <q-card-section class="">
        <!-- <div v-if="contents" >
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
        </div> -->
        <div
          v-for="(material, index) in materials"
          :key="index"
          class="row q-mb-sm"
        >
          <q-checkbox
            dense
            :label="material[0]"
            v-model="material[1]"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { getCssVar } from 'quasar'
import { ref, reactive } from 'vue'
import { useStoreApp } from 'stores/storeApp'
import { useStoreSubs } from 'stores/storeSubs'

const storeApp = useStoreApp()
const storeSubs = useStoreSubs()


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
const materials = reactive([
  ['PDF'        , false, 0],
  ['Áudio/Vídeo', false, 0],
  ['Questões'   , false, 0],
])

const emit = defineEmits(['updateColor'])

const pickColor = (value) => {
  emit('updateColor', value)
}


</script>

<style lang="scss" scoped>

</style>

