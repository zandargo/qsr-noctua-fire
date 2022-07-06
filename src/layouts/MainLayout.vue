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
    <!-- <q-page-container>
      <router-view name="main"/>
    </q-page-container> -->
    <q-page-container
				class="bg-l5 q-mb-none row items-stretch window-height"
			>
				<q-scroll-area
					:thumb-style="thumbStyle"
					style="min-height: 300px; width: 100%"
					class="q-py-none q-px-md q-ma-none"
				>
					<router-view name="main" class="q-pa-md" />
				</q-scroll-area>
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

const thumbStyle = {
  right: "4px",
  borderRadius: "4px",
  backgroundColor: "#607d8b",
  width: "8px",
  opacity: 0.5,
}

</script>
