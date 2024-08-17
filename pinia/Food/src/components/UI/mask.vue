<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['isShow'])
const emits = defineEmits(['hide'])
</script>

<template>
  <!-- Teleport可以将组件渲染道网页的指定位置 -->
  <Teleport to="body">
    <!-- #mask是在index html中创建了一个div,把遮罩层放到我想要的指定位置中,
    属性to后面接的是一个元素选择器 -->
    <div :="$attrs" class="mask" v-show="props.isShow" @click.self="$emit('hide')">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
}
</style>
