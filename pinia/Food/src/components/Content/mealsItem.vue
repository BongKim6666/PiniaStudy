<script lang="ts" setup>
import { defineProps } from 'vue'
import { useMealsStore } from '@/stores/meals'
import counter from '@/components/UI/counter.vue'

const props = defineProps(['meal', 'desc'])
</script>

<template>
  <!-- 单个汉堡组件   -->
  <div class="Item">
    <div class="ItemImg">
      <img :src="props.meal.img" alt="props.meal.title" />
    </div>
    <div class="ItemContent">
      <div class="Title">
        {{ props.meal.title }}
      </div>
      <div class="Desc">
        <p v-show="props.desc">{{ props.meal.desc }}</p>
      </div>
      <div class="Select">
        <div class="ItemPrice">&yen;{{ props.meal.price }}</div>
        <counter :meal="props.meal" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Item {
  display: flex;
  width: 100%;
  height: calc(inherit / 7);
  background-color: none;
  border-bottom: 1px #999 solid;
  justify-content: space-around;
  align-items: center;

  .ItemImg {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ItemContent {
    display: flex;
    width: 70%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .Title {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    .Desc {
      width: 100%;
      font-size: 2rem;
      color: #999;
      word-wrap: break-word;
      margin-bottom: 2rem;
    }
    .Select {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 2rem;
      padding-right: 2rem;
    }
  }
}
</style>
