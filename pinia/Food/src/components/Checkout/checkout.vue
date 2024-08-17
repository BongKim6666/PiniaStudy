<template>
  <div class="Checkout" v-show="props.isShow">
    <div class="CloseBtn" @click="$emit('close')">
      <i class="ri-close-large-line"></i>
    </div>

    <!-- 设置订单详情 -->
    <div class="Order">
      <header class="Header">餐品详情</header>
      <div class="List">
        <div class="Item" v-for="item in mealsStore.cartMeals" :key="item.id">
          <div class="Content">
            <div class="Img">
              <img :src="item.img" :alt="item.title" />
            </div>
            <div class="Info">
              <div class="Title">{{ item.title }}</div>
              <div class="Count">
                <Counter :meal="item"></Counter>
                <span class="Amount">￥{{ item.count * item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="TotalPrice">
        <span>{{ mealsStore.totalPrice }}</span>
      </div>
    </div>
    <!-- 去支付 -->
    <div class="Bar">
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
        <div class="CartBtn">去支付</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/UI/counter.vue'
import { useMealsStore } from '@/stores/meals'

const mealsStore = useMealsStore()
const props = defineProps(['isShow'])
const emits = defineEmits(['close'])
</script>
<style lang="scss" scoped>
.Checkout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(240, 240, 240);
  z-index: 99999;
  .CloseBtn {
    height: 4rem;
    line-height: 4rem;
    padding-left: 2rem;
    background-color: #bfa;
    font-size: 2rem;
    font-weight: bold;
  }
  .Order {
    height: 65rem;
    background-color: #fff;
    border-radius: 4rem;
    margin: 2rem 1rem;
    padding: 2rem 1rem;

    .Header {
      font-size: 2rem;
      font-weight: bold;
      padding: 1rem;
    }
    .List {
      max-height: 80%;
      border-top: 1px dotted lightgray;
      border-bottom: 1px dotted lightgray;

      overflow: auto;
      .Content {
        display: flex;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        .Img {
          width: 15%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .Info {
          display: flex;
          width: 85%;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          .Title {
            margin: 1rem 0;
            font-size: 2rem;
          }
          .Count {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-right: 1rem;
            .Amount {
              font-size: 2rem;
            }
          }
        }
      }
    }
    .TotalPrice {
      display: flex;
      justify-content: right;
      height: 5%;
      line-height: 10rem;

      font-size: 2rem;
      span {
        font-weight: bold;
      }
    }
    .TotalPrice::before {
      content: '合计 ￥';
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
  .Bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2rem;
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
  }
}
</style>
