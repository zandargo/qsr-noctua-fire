<template>
  <q-card class="" style="max-width: 600px">
    <q-card-section class="bg-primary text-white">
      <div class="text-h3 pet-caps">{{ title }}</div>
      <div class="text-subtitle2">{{ caption }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="">

    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
})
</script>

<style lang="scss" scoped>

</style>

