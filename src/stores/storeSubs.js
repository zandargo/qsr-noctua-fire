import { defineStore } from 'pinia'

export const useStoreSubs = defineStore('storeSubs', {
  state: () => {
    return {
      list: [
        {
          title: 'Português',
        },
        {
          title: 'Matemática',
        },
        {
          title: 'Informática',
        },
      ],
    }
  },
  actions: {
  },
  getters: {
  }
})
