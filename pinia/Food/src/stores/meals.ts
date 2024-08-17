import { defineStore } from 'pinia'

interface Meal {
  count: number
  // title: string
  // desc: string
  // price: number
  // img: string
}

export const useMealsStore = defineStore('meals', {
  state: () => ({
    data: [
      {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/images/meals/1.png',
        count: 0
      },
      {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/images/meals/2.png',
        count: 0
      },
      {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/images/meals/3.png',
        count: 0
      },
      {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/images/meals/4.png',
        count: 0
      },
      {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/images/meals/5.png',
        count: 0
      },
      {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/images/meals/6.png',
        count: 0
      },
      {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/images/meals/7.png',
        count: 0
      }
    ],

    keyword: ''
  }),

  getters: {
    filteredMeals: (state) => {
      return state.data.filter((item) => item.title.includes(state.keyword))
    },
    //已选中数量的商品
    cartMeals: (state) => {
      return state.data.filter((item) => item.count > 0)
    },
    //购物车商品数量
    totalCount: (state) => {
      const cartMeals = state.data.filter((item) => item.count > 0)
      if (cartMeals.length <= 0) return 0
      return cartMeals.reduce((total, meal) => total + meal.count, 0)
    },
    totalPrice: (state) => {
      const cartMeals = state.data.filter((item) => item.count > 0)
      if (cartMeals.length <= 0) return 0
      return cartMeals.reduce((total, meal) => total + meal.count * meal.price, 0)
    }
  },
  actions: {
    addMealToCart(meal: Meal) {
      // Add meal to cart logic here
      if (isNaN(meal.count)) {
        meal.count = 0
      }
      meal.count++
    },

    subMealFromCart(meal: Meal) {
      if (isNaN(meal.count) || meal.count < 0) return
      meal.count--
    },

    clearCart() {
      this.cartMeals.forEach((item) => (item.count = 0))
    }
  }
})
