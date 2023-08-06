<template>
  <div id="cartWrapper">
    <h2 class="title">Giỏ hàng</h2>
    <main class="main-content">
      <div class="cart-item-list">
        <ZCartItem
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          :data="cartItem"
          @change="handleChange(cartItem, $event)"
          @increase="cartStore.increaseQuantity(cartItem)"
          @decrease="cartStore.decreaseQuantity(cartItem)"
          @delete="cartStore.removeCartItem(cartItem)"
        ></ZCartItem>
      </div>
      <div class="voucher-wrapper">
        <div class="title">NHẬP MÃ COUPON ƯU ĐÃI</div>
      </div>
      <div class="price-calculation-wrapper">
        <div class="title">TẠM TÍNH</div>
        <div class="quantity-wrapper">
          <span>Số lượng</span>
          <span>{{ cartStore.totalQuantity }}</span>
        </div>
        <div class="sub-total-wrapper">
          <span>Tạm tính</span>
          <span>{{ subTotal }}</span>
        </div>
        <div class="shipping-fee-wrapper">
          <span>Phí vận chuyển </span>
          <span>{{ shippingFee }}</span>
        </div>
        <hr />
        <div class="total-wrapper">
          <span>Tổng số </span>
          <span class="bold">{{ total }}</span>
        </div>
        <a-button>Thanh toán {{ total }}</a-button>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ZCartItem from '@/components/ZCartItem.vue'
import { CartItem } from '@/models/cart-item.model'
import { useCartStore } from '@/store/cart'
// chuyển sang dùng pinia thay vì cart service
const cartStore = useCartStore()

function handleChange(cartItem: CartItem, quantity: number) {
  cartItem.quantity = quantity
}
const cartItems = cartStore.cartItems // gán địa chỉ, nên thay đổi cartItems thì cartItems trong store cũng đổi

// const subTotal = cartStore.totalPrice; // chỉ gán giá trị nên totalPrice trong store thay đổi thì subTotal ko đổi
const subTotal = computed((): string => cartStore.totalPrice + 'đ')

const shippingFeeRaw = computed((): number => 0)

const shippingFee = computed((): string => shippingFeeRaw.value + 'đ')

const total = computed((): string => cartStore.totalPrice - shippingFeeRaw.value + 'đ')
</script>

<style scoped></style>
