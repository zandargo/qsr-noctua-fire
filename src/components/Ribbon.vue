<template>
  <div style="height: 80px">
    <p>Testando: {{ storeApp.tab }}</p>
  </div>
</template>

<script setup>
import { useAppStore } from 'src/stores/storeApp'

const storeApp = useAppStore()


</script>

<style lang="scss" scoped>
</style>
