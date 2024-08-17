<template>
  <Mask>
    <div class="Dialog">
      <div class="DialogInner">
        <p class="Word">{{ props.msg }}</p>
        <div class="DialogBtn">
          <button @click="$emit('hide')">取消</button>
          <button class="ok" @click="$emit('closeDetails')">确认</button>
        </div>
      </div>
    </div>
  </Mask>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import Mask from '@/components/UI/mask.vue'
import { useMealsStore } from '@/stores/meals'

const props = defineProps(['msg'])
const mealsStore = useMealsStore()
const emits = defineEmits(['hide', 'closeDetails'])
</script>

<style lang="scss" scoped>
.Dialog {
  position: absolute;
  display: flex;
  width: 80%;
  height: 20%;
  background-color: #fff;
  border-radius: 4rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  .DialogInner {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 40%;

    justify-content: center;
    align-items: center;
    .Word {
      font-size: 2rem;
    }
    .DialogBtn {
      display: flex;
      width: 70%;
      height: 40%;

      justify-content: space-around;
      align-items: center;
      button {
        border: none;
        padding: 0 3rem;
        border-radius: 1rem;
        background-color: black;
        color: #fff;
      }
      .ok {
        background-color: rgb(248, 188, 0);
      }
    }
  }
}
</style>
