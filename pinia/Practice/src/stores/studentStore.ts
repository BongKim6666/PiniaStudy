import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', {
    state: () => ({
        name: 'Tom',
        age: 18,
        gender: 'Male',
        address: 'USA',
        skill: ['beatBox', 'Soccer', 'Drink']
    }),
    getters: {
        title: state => {
            return 'Mr.' + state.name
        }
    },
    actions: {
        growUp() {
            this.age++
        }
    }

})