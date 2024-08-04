<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useStudentStore } from '@/stores/studentStore'

const studentStore = useStudentStore()
/*
    store实例本身就是一个reactive对象，可以通过它直接访问state中的数据。
    但是如果直接解构了state中的数据，例如下面的name或age， 它将变成非响应式数据
*/
// const { name, age } = studentStore

/*
    使用storeToRefs 进行tate中的数据的解构， 它将会变成响应式数据, 但是不包括actions里的method， actions不能被解构
    只适用于解构State和getters， 解构为ref属性
*/
const { name, age, title } = storeToRefs(studentStore)
</script>
<template>
  <h4>
    ComponentC--
    {{ name }} --{{ age }}--{{ title }}
    <button @click="studentStore.growUp">按钮</button>
  </h4>
</template>
