<script lang="ts" setup>
import { defineProps } from 'vue'
import { useMealsStore } from '@/stores/meals'

const mealsStore = useMealsStore()
const props = defineProps(['meal'])
</script>

<template>
  <div class="Counter">
    <template v-if="props.meal.count > 0">
      <button class="Sub" @click="mealsStore.subMealFromCart(props.meal)">
        <i class="ri-subtract-line"></i>
      </button>
      <span class="CountNum">{{ props.meal.count }}</span>
    </template>

    <button class="Add" @click="mealsStore.addMealToCart(props.meal)">
      <i class="ri-add-line"></i>
    </button>
  </div>
</template>
\

<style lang="scss" scoped>
.Counter {
  display: flex;
  width: 8rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .CountNum {
    font-weight: bold;
  }
  .Sub {
    display: flex;
    border: 1px solid black;
    background-color: #fff;
    justify-content: center;
  }
  button {
    display: block;
    width: 10px;
    height: 10px;
    line-height: 10px;
    border-radius: 50%;
    border: none;
    background-color: rgb(234, 178, 0);
    color: black;
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>
