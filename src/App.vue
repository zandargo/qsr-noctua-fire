<template>
    <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoreAuth } from 'stores/storeAuth'
import { useStoreApp } from 'stores/storeApp'

const storeAuth = useStoreAuth()
const storeApp = useStoreApp()
onMounted(() => {
  storeAuth.init()
})

</script>

<style lang="scss">
  #appTitlebar {
    background: navy;
  }
</style>
