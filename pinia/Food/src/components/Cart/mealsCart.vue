<script setup>
import { useMealsStore } from '@/stores/meals'
import CartDetails from '@/components/Cart/cartDetails.vue'
import Checkout from '@/components/Checkout/checkout.vue'
import { ref } from 'vue'

const mealsStore = useMealsStore()
const showDetails = ref(false)
const showCheckout = ref(false)
</script>

<template>
  <Checkout :isShow="showCheckout" @close="showCheckout = false"></Checkout>
  <CartDetails :isShow="showDetails" @hide="showDetails = false"></CartDetails>

  <div class="Cart">
    <div class="CartInner">
      <div class="CartIcon">
        <i class="ri-shopping-bag-2-fill"></i>
        <span class="CartNum">{{ mealsStore.totalCount }}</span>
      </div>
      <div class="CartInfo">
        <h3 v-if="mealsStore.totalCount == 0">未选购商品</h3>
        <span v-else class="CartPrice" @click="($event) => (showDetails = true)">{{
          mealsStore.totalPrice
        }}</span>
      </div>
      <div class="CartBtn" @click="showCheckout = mealsStore.totalCount > 0">去结算</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Cart {
  position: fixed;
  width: 100%;
  padding: 0.5rem 0.5rem;
  bottom: 2rem;
  opacity: 0.95;
  z-index: 999;
}
.CartInner {
  position: relative;
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: #3a3a3c;
  border: none;
  outline: none;
  border-radius: 4rem;
  font-size: 1.5rem;
  .CartIcon i {
    position: absolute;
    top: -1rem;
    left: 0;
    color: #c69c6d;
    font-size: 5rem;
    left: 1rem;
  }
  .CartNum {
    display: flex;
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: -1rem;
    left: 4rem;
    color: white;
    background-color: red;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.5rem;
  }
  .CartInfo {
    position: absolute;
    left: 9rem;
    color: #9d9d9f;
    .CartPrice {
      color: white;
      font-size: 2rem;
    }
    .CartPrice::before {
      content: '￥';
      font-size: 1rem;
      margin-right: 0.3rem;
    }
  }
  .CartBtn {
    display: flex;
    width: 20%;
    height: 100%;
    background-color: rgb(248, 188, 0);
    color: black;
    border: none;
    outline: none;
    border-radius: 4rem;
    font-size: 1.5rem;
    justify-content: center;
    align-items: center;
  }
}
</style>
