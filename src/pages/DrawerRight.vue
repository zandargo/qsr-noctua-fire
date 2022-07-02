<template>
  <div class="column full-height full-width">
    <div class="bg-l4 q-pa-md">
      <h5 class="q-my-none">Bem vindo(a),</h5>
      <h1 class="q-my-none">{{ storeAuth.user.firstName }}</h1>
    </div>

    <q-separator />

    <div class="col-grow q-pa-md">
      <p>teste 2</p>
    </div>

    <!-- <div class="col-2 q-px-md q-pt-sm q-pb-lg"> -->
      <LogoutBtn class="fixed-bottom text-left q-ma-md"/>
    <!-- </div> -->

  </div>
</template>

<script setup>
import { useStoreAuth } from 'stores/storeAuth'
import LogoutBtn from 'components/ButtonLogout.vue'

const storeAuth = useStoreAuth()



</script>

<style lang="scss" scoped>

</style>
