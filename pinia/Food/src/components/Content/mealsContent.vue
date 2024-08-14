<script setup>
import { defineProps } from 'vue'
import mealsItem from './mealsItem.vue'

const props = defineProps(['meals'])
</script>

<template>
  <div class="Contents">
    <!-- 商品信息 -->
    <mealsItem :desc="$attrs.desc" v-for="(item, index) in props.meals" :meal="item" :key="index" />

    <h2 v-if="!props.meals || props.meals.length == 0">没有找到指定商品</h2>
  </div>
</template>

<style scoped>
.Contents {
  height: calc(100vh - 15rem);
  background-color: none;
  overflow: auto;
  padding-bottom: 5rem;
}
</style>
