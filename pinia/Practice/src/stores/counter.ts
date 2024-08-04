import { defineStore } from 'pinia'

export const useCountStore = defineStore("count", {
  state: () => ({
    count: 100,
    name: 'WuKong',
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  }
})
