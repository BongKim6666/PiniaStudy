<template>
  <Mask style="z-index: 99">
    <Dialog
      :isShow="showDialog"
      @hide="showDialog = false"
      :msg="msg"
      @closeDetails="closeDetails"
    ></Dialog>
    <div class="CartDetails">
      <div class="Header">
        <div class="Left"><h2>餐品详情</h2></div>
        <div class="Right">
          <a @click="showDialog = !showDialog"
            ><i class="ri-delete-bin-line" href="javascript:;"></i></a
          >清空购物车
        </div>
      </div>
      <MealsContent :meals="mealsStore.cartMeals" :desc="false"></MealsContent>
    </div>
  </Mask>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import MealsContent from '@/components/Content/mealsContent.vue'
import Mask from '@/components/UI/mask.vue'
import Dialog from '@/components/UI/dialog.vue'
import { useMealsStore } from '@/stores/meals'

const emits = defineEmits(['hide'])
const mealsStore = useMealsStore()
const showDialog = ref(false)

const msg = ref('你确定要清空购物车吗？')

function closeDetails() {
  mealsStore.clearCart()
  showDialog.value = false
  emits('hide')
}
</script>

<style lang="scss" scoped>
.CartDetails {
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  padding-top: 1rem;
  z-index: 999;
  .Header {
    display: flex;
    width: 100%;
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    .Left {
      font-size: 1.5rem;
    }
    .Right {
      font-size: 1.3rem;
      color: #9f9f9f;
      i {
        font-size: 2rem;
        margin-right: 2rem;
      }
    }
  }
  .Contents {
    height: auto;
    max-height: 472px;
  }
}
</style>
