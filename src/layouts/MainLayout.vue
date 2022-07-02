<template>
  <q-layout view="hHh LpR fFf">
<!-- //* ------------------------ HEADER ------------------------ *// -->
    <q-header elevated class="column shadow-3">
      <!-- //*  DESKTOP BAR  *// -->
      <TitleBar />

      <!-- //*  MOBILE BAR  *// -->
      <!-- <div v-if="$q.platform.is.electron" class="col"> -->
      <div class="col">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="storeApp.actLeftDrawer('toggle')"
          />

          <q-toolbar-title>
          </q-toolbar-title>

          <q-btn
            flat
            dense
            round
            icon="person"
            aria-label="User"
            @click="storeApp.actRightDrawer('toggle')"
          />
        </q-toolbar>
      </div>
      <!-- //*  TABS & RIBBON  *// -->
      <!-- <div class="col bg-l3 txt-d3">
        <TabsBar />
        <Ribbon />
      </div> -->

    </q-header>
<!-- //* ------------------------ DRAWER ------------------------ *// -->
    <q-drawer
      elevated
      persistent
      v-model="storeApp.leftDrawerOpen"
      side="left"
      behavior="desktop"
      class="bg-l5 q-pa-none shadow-2"
      style="overflow: hidden; min-height: 100%"
    >
      <LeftDrawer />
    </q-drawer>
    <q-drawer
      elevated
      persistent
      v-model="storeApp.rightDrawerOpen"
      side="right"
      behavior="desktop"
      class="bg-l5 q-pa-none shadow-2"
      style="overflow: hidden; min-height: 100%"
    >
      <RightDrawer />
    </q-drawer>

<!-- //* ------------------------ MAIN ------------------------ *// -->
    <q-page-container>
      <router-view name="main"/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, onMounted, onBeforeUpdate, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import TitleBar from 'components/TitleBar.vue'
import TabsBar from 'components/TabsBar.vue'
import Ribbon from 'components/Ribbon.vue'
import LeftDrawer from 'pages/DrawerLeft.vue'
import RightDrawer from 'pages/DrawerRight.vue'
import { useStoreAuth } from 'stores/storeAuth'
import { useStoreApp } from 'stores/storeApp'

const storeAuth = useStoreAuth()
const storeApp = useStoreApp()

// const leftDrawerOpen = ref(true)
// const toggleLeftDrawer = () => {
//   if (storeAuth.user.id) {
//     leftDrawerOpen.value = !leftDrawerOpen.value
//   }
// }
// const rightDrawerOpen = ref(true)
// const toggleRightDrawer = () => {
//   if (storeAuth.user.id) {
//     rightDrawerOpen.value = !rightDrawerOpen.value
//   }
// }


// onMounted(() => {
//   if (!storeAuth.user.id) {
//     leftDrawerOpen.value = false
//     rightDrawerOpen.value = false
//   }
// })
// onBeforeUpdate(() => {
//   if (!storeAuth.user.id) {
//     leftDrawerOpen.value = false
//     rightDrawerOpen.value = false
//   }
// })

</script>
