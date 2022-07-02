<template>
  <div style="height: 80px">
    <p>Testando: {{ storeApp.tab }}</p>
  </div>
</template>

<script setup>
import { useStoreApp } from 'src/stores/storeApp'

const storeApp = useStoreApp()


</script>

<style lang="scss" scoped>
</style>
