<script lang="ts" setup>
import ComponentB from '@/components/ComponentB.vue'
import ComponentC from '@/components/ComponentC.vue'
import { useCountStore } from '@/stores/counter'

const countStore = useCountStore()
</script>

<template>
  <h3>
    ComponentA--
    {{ countStore.count }} -- {{ countStore.double }} -- {{ countStore.name }} --

    <button>按钮</button>
  </h3>
  <h4>
    <ComponentB></ComponentB>
    <ComponentC></ComponentC>
  </h4>
</template>
