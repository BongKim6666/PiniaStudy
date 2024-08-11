<script lang="ts" setup>
import { useMealsStore } from '@/stores/meals'

const mealsStore = useMealsStore()
</script>

<template>
  <div class="Cart">
    <div class="CartInner">
      <input class="Filter-input" type="text" placeholder="请输入关键字" />

      <i class="ri-search-line"></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Cart {
  padding: 0.5rem 0.5rem;
}

.CartInner {
  display: flex;
  align-items: center;
  height: 4rem;
  position: relative;
}

.Filter-input {
  background-color: rgb(242, 242, 242);
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  outline: none;
  padding: 0 4rem 0 4rem;
  font-size: 1.5rem;
}

.Filter-inner i {
  position: absolute;
  color: rgb(184, 184, 184);
  font-size: 1.5rem;
  left: 1rem;
}
</style>
