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
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
          </q-toolbar-title>

          <q-btn
            flat
            dense
            round
            icon="person"
            aria-label="User"
            @click="toggleRightDrawer"
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
      v-model="leftDrawerOpen"
      side="left"
      elevated
      behavior="desktop"
      class="bg-l5 txt-d5 absolute-left q-pa-md shadow-2"
      style="overflow: hidden; min-height: 100%"
    >
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      elevated
      behavior="desktop"
      class="bg-l5 txt-d5 absolute-right q-pa-md shadow-2"
      style="overflow: hidden; min-height: 100%"
    >
    </q-drawer>

<!-- //* ------------------------ MAIN ------------------------ *// -->
    <q-page-container>
      <router-view name="main"/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import TitleBar from 'components/TitleBar.vue'
import TabsBar from 'components/TabsBar.vue'
import Ribbon from 'components/Ribbon.vue'
import { useStoreAuth } from 'stores/storeAuth'

const leftDrawerOpen = ref(true)
const toggleLeftDrawer = () => {
  if (storeAuth.user.id) {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
}
const rightDrawerOpen = ref(true)
const toggleRightDrawer = () => {
  if (storeAuth.user.id) {
    rightDrawerOpen.value = !rightDrawerOpen.value
  }
}

const storeAuth = useStoreAuth()

onMounted(() => {
  if (!storeAuth.user.id) {
    leftDrawerOpen.value = false
    rightDrawerOpen.value = false
  }
})

</script>
