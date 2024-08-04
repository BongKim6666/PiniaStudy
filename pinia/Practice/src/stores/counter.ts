import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// export const useCountStore = defineStore("count", {
//   state: () => ({
//     count: 100,
//     name: 'WuKong',
//   }),
//   getters: {
//     double: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   }
// })


export const useCountStore = defineStore('count', () => {
  const count = ref(50);
  const name = ref('Kendrick Lamar');
  const double = computed(() =>
    count.value * 2
  )
  function increment() {
    count.value++
  }
  return { count, name, double, increment }
})