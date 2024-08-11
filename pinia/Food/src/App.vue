<script setup>
import mealsFilter from '@/components/Filter/mealsFilter.vue'
import mealsCart from '@/components/Cart/mealsCart.vue'
import mealsContent from '@/components/Content/mealsContent.vue'
import { useMealsStore } from './stores/meals'

const mealsStore = useMealsStore()
</script>

<template>
  <!-- 商品搜索 -->
  <mealsFilter />
  <!-- 商品信息 -->
  <mealsContent />
  <!-- 购物车 -->
  <mealsCart />
</template>

<style scoped></style>
