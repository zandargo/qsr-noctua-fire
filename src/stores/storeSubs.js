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
          title: 'Estatística',
        },
        {
          title: 'Informática',
        },
        {
          title: 'Informática',
        },
        {
          title: 'Informática',
        },
        {
          title: 'Informática',
        },
        {
          title: 'Informática',
        },
        {
          title: 'Informática',
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
