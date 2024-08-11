<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const isClick = ref(false)
function reduceCounter() {
  count.value--
  if (count.value < 0) {
    count.value = 0
  }
}
function addCounter() {
  count.value++
  isClick.value = true
}
</script>

<template>
  <div class="Counter">
    <button class="sub" @click="reduceCounter" v-show="isClick">
      <i class="ri-subtract-line"></i>
    </button>
    <span v-show="isClick" class="countNum">{{ count }}</span>
    <button class="add" @click="addCounter"><i class="ri-add-line"></i></button>
  </div>
</template>

<style lang="scss" scoped>
.Counter {
  display: flex;
  width: 8rem;
  align-items: center;
  justify-content: space-between;
  .countNum {
    font-weight: bold;
  }
  .sub {
    background-color: #fff;
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
