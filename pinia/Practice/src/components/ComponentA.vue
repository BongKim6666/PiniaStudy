<script lang="ts" setup>
import { useCountStore } from '@/stores/counter'

const countStore = useCountStore()
</script>

<template>
  <h3>
    ComponentA--
    {{ countStore.count }} -- {{ countStore.double }} -- {{ countStore.name }} --

    <button>按钮</button>
  </h3>
  <h3>
    ComponentA2--
    {{ countStore.count }} --
    <button @click="countStore.increment">按钮</button>
  </h3>
</template>
