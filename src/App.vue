<template>
    <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStoreAuth } from 'stores/storeAuth'
import { useStoreApp } from 'stores/storeApp'
import { useStoreSubs } from 'stores/storeSubs'

// import useStoreSubs from 'stores/storeSubs'

const storeAuth = useStoreAuth()
const storeApp = useStoreApp()
const storeSubs = useStoreSubs()


onMounted(() => {
  storeAuth.init()
})

</script>

<style lang="scss">
  #appTitlebar {
    background: navy;
  }
</style>
