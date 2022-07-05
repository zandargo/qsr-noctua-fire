<template>
  <q-item
    clickable
    :to="{ name: routeTo }"
  >
    <q-item-section
      v-if="icon"
      avatar
      class="q-px-none"
      style="36px"
    >
      <q-icon :name="icon" size="32px" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="pet-caps">
        <h3 class="q-my-none">{{ title }}</h3>
      </q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
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
  routeTo: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>

</style>
