<template>
  <div class="q-gutter-md q-py-md q-px-lg align-center">
    <SubjectCard
      v-for="subject in storeSubs.list"
      :key="subject.title"
      v-bind="subject"
    />
  </div>
</template>

<script setup>
import { useStoreSubs } from 'stores/storeSubs'
import SubjectCard from 'components/CardSubject.vue'

const storeSubs = useStoreSubs()


</script>

<style lang="scss" scoped>

</style>
