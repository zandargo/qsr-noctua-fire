<template>
  <div>
    <q-btn
      rounded
      flat
      color="primary"
      icon="logout"
      label="Sair"
      @click="doLogout" />
  </div>
</template>

<script setup>
import { useStoreAuth } from 'stores/storeAuth'
import { useStoreApp } from 'stores/storeApp'

const storeAuth = useStoreAuth()
const storeApp = useStoreApp()

const doLogout = () => {
  storeApp.actLeftDrawer('close')
  storeApp.actRightDrawer('close')
  storeAuth.logoutUser()
}
</script>

<style lang="scss" scoped>
</style>
