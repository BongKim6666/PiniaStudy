<script setup>
import mealsItem from './mealsItem.vue'

import { useMealsStore } from '@/stores/meals'

const mealsStore = useMealsStore()
</script>

<template>
  <div class="Contents">
    <!-- 商品信息 -->
    <mealsItem v-for="(item, index) in mealsStore.filteredMeals" :meal="item" :key="index" />

    <h2 v-if="mealsStore.filteredMeals.length == 0">没有找到指定商品</h2>
  </div>
</template>

<style scoped>
.Contents {
  height: calc(100vh - 10rem);
  background-color: #bfa;
  overflow: auto;
}
</style>
