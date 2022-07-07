import { defineStore } from 'pinia'

export const useStoreSubs = defineStore('storeSubs', {
  state: () => {
    return {
      list: [
        {
          title: 'Português',
          color: '#333',
          contents: [
            {
              type: 'Material escrito',
              qty: 130,
            },
            {
              type: 'Questões',
              qty: 40,
            },
            {
              type: 'Áudio/Vídeo',
              qty: 10,
            },
          ]
        },
        {
          title: 'Matemática',
          color: '#333',
        },
        {
          title: 'Estatística',
          color: '#333',
        },
        {
          title: 'Informática',
          color: '#333',
        },

      ],
    }
  },
  actions: {
  },
  getters: {
  }
})
