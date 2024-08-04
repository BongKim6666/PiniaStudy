<script lang="ts" setup>
import { useCountStore } from '@/stores/counter'
import ComponentC from '@/components/ComponentC.vue'

const countStore = useCountStore()
</script>

<template>
  <h3>
    ComponentA--
    {{ countStore.count }} -- {{ countStore.double }} -- {{ countStore.name }} --

    <button>按钮</button>
  </h3>
  <h4>
    <ComponentC />
  </h4>
</template>
