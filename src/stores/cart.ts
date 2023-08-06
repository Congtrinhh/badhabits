import { type CartItem } from '@/models/cart-item.model'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useCartStore = defineStore('cart', () => {
  const lsKey = 'cartItems'

  const tmpCartItems = JSON.parse(localStorage.getItem(lsKey) ?? '[]') ?? []

  const cartItems = ref<CartItem[]>(tmpCartItems)

  saveAll([
    {
      id: 1,
      name: 'Apple watch new 2023',
      price: 1000,
      quantity: 1
    },
    {
      id: 2,
      name: 'Samsung watch 2023',
      price: 2000,
      quantity: 1
    },
    {
      id: 3,
      name: 'Xiaomi watch 2023',
      price: 500,
      quantity: 1
    }
  ] as any[])

  function saveAll(items: CartItem[]) {
    cartItems.value = items
    localStorage.setItem(lsKey, JSON.stringify(cartItems.value))
  }
  /**
   * loại bỏ 1 item
   * @param cartItem
   */
  function removeCartItem(cartItem: any): boolean {
    try {
      // TODO: test whether splice method modifies the arrays
      const indexRemove = cartItems.value.findIndex((item) => item.id === cartItem.id)
      if (indexRemove !== -1) {
        cartItems.value.splice(indexRemove, 1)
        localStorage.setItem(lsKey, JSON.stringify(cartItems.value))
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
  /**
   * thêm/sửa
   * @param cartItem
   */
  function saveCartItem(cartItem: any): boolean {
    try {
      const itemIndex = cartItems.value.findIndex((item) => item.id === cartItem.id)
      if (itemIndex !== -1) {
        cartItems.value.splice(itemIndex, 1, cartItem)
        localStorage.setItem(lsKey, JSON.stringify(cartItems.value))
        return true
      } else {
        cartItems.value.push(cartItem)
        localStorage.setItem(lsKey, JSON.stringify(cartItems.value))
        return true
      }
    } catch (error) {
      return false
    }
  }
  /**
   * xoá toàn bộ
   */
  function clearCart(): boolean {
    try {
      cartItems.value = []
      localStorage.removeItem(lsKey)
      return true
    } catch (error) {
      return false
    }
  }

  const totalPrice = computed((): number => {
    const result = cartItems.value.reduce((prevValue, currentCartItem) => {
      const currentPrice = currentCartItem.price * currentCartItem.quantity
      return prevValue + currentPrice
    }, 0)
    return result
  })

  /**
   * tổng số sản phẩm. ví dụ: có 2 đôi giày nike af và 3 áo thun ngủ một mình => tổng số sp = 5
   */
  const totalQuantity = computed((): number => {
    const result = cartItems.value.reduce((prevValue, currentCartItem) => {
      return prevValue + currentCartItem.quantity
    }, 0)
    return result
  })

  function decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity >= 2) {
      cartItem.quantity--
    }
  }

  function increaseQuantity(cartItem: CartItem) {
    cartItem.quantity++
  }

  return {
    cartItems,
    saveAll,
    removeCartItem,
    saveCartItem,
    clearCart,
    totalPrice,
    totalQuantity,
    decreaseQuantity,
    increaseQuantity
  }
})

export { useCartStore }
