<script lang="ts" setup>
import ComponentC from '@/components/ComponentC.vue'
import { ref } from 'vue'
const isShow = ref(true)
</script>

<template>
  <h3>ComponentB</h3>
  <ul>
    <li v-show="isShow"><ComponentC /></li>
  </ul>
</template>
