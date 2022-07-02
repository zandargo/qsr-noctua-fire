import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { useStoreAuth } from 'stores/storeAuth'

export const useStoreApp = defineStore('storeApp', {
  state: () => ({
    tab: 'tab1',
    leftDrawerOpen: false,
    rightDrawerOpen: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setTab(newTab) {
      this.tab = newTab
    },
    actLeftDrawer(op) {
      const storeAuth = useStoreAuth()
      if (!storeAuth.user.id) {
        this.leftDrawerOpen = false
        return
      }

      switch (op) {
        case 'close':
          this.leftDrawerOpen = false
          break
        case 'open':
          this.leftDrawerOpen = true
          break
        case 'toggle':
          this.leftDrawerOpen = !this.leftDrawerOpen
          break
        default:
          return
      }
    },
    actRightDrawer(op) {
      const storeAuth = useStoreAuth()
      if (!storeAuth.user.id) {
        this.rightsDrawerOpen = false
        return
      }

      switch (op) {
        case 'close':
          this.rightDrawerOpen = false
          break
        case 'open':
          this.rightDrawerOpen = true
          break
        case 'toggle':
          this.rightDrawerOpen = !this.rightDrawerOpen
          break
        default:
          return
      }
    },
  },
});
