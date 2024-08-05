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
    只适用于解构State和getters， 解构为ref属性*/
const { name, age, title, skill } = storeToRefs(studentStore)

/*
    state的修改：
    1.直接修改
    2.通过$patch    是响应式的
    3.通过$patch传函数的形式修改   是响应式的
    4.直接替换State    $state的话 必须要把原有的所有State对象里的属性全部写出来（使用script lang=‘ts'的情况下）
    如果是script setup 。 没有使用typescirpt， 可以不用把所有属性全部写出
      和上面的通过$patch传函数的形式修改是一样的   是响应式的
    5.通过$reset, 使state实例返回到初始化的状态
*/

studentStore.$state = {
  name: '沙和尚',
  age: 66,
  gender: 'female',
  address: 'Tokyo',
  skill: ['吃屎', '扑街', '咸猪手']
}
const clickHandler = () => {
  // studentStore.$patch({
  //   name: '孙小圣',
  //   age: 20
  // })

  // studentStore.$patch((state) => {
  //   ;(state.name = '猪八戒'), (state.age = 25), (state.skill = [...state.skill, '法力无边'])
  // })

  studentStore.$state = {
    name: '沙和尚',
    age: 66,
    gender: 'female',
    address: 'Tokyo',
    skill: ['吃屎', '扑街', '咸猪手']
  }
}

/*
  store的订阅
    - 当store中的state发生变化时，做一些响应的操作

    $subscribe相当于 watch函数
    添加{ detached: true }时，即使这个$subscribe的对象是否是一个挂载状态， 依旧可以监视它的变化
*/
studentStore.$subscribe(
  (mutation, state) => {
    //当前被监测的state对象
    // console.log('state发生变化了', state)

    //mutation表示修改的信息
    console.log('state发生变化了', mutation)

    //表示修改的信息方式， 直接修改？ 会显示direct
    console.log(mutation.type)

    //使用订阅时，不要在回调函数中直接修改state, 会使内存溢出
    //state.age++
  },
  { detached: true }
)
</script>

<template>
  <h4>
    ComponentC--
    {{ name }} --{{ age }}--{{ title }}--{{ skill
    }}<button @click="studentStore.growUp">按钮</button>
    <hr />
    <button @click="studentStore.changeName">修改Name</button>
    <button @click="clickHandler">Patch修改</button>
    <button @click="studentStore.$reset()">重置</button>
  </h4>
</template>
