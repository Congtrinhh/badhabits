<template>
  <div id="cart">
    <div class="icon-wrapper header-item" @click="toggleList">
      <div class="icon"><img src="@/assets/icons/cart.webp" alt="" /></div>
      <div class="quantity">{{ cartStore.totalQuantity }}</div>
    </div>

    <a-popover v-model:open="isVisibleList" trigger="click">
      <template #content>
        <div class="cart-item-list">
          <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
            <div class="detail-wrapper">
              <div class="name">{{ item?.name }}</div>
            </div>
            <div class="buttons">
              <a-button @click="cartStore.increaseQuantity(item)">+</a-button>
              <a-button @click="cartStore.decreaseQuantity(item)">-</a-button>
              <a-button @click="cartStore.removeCartItem(item)">&times;</a-button>
            </div>
          </div>
        </div>

        <div class="summary">
          <div class="total-price">
            Tổng tiền:
            {{ totalPrice }}
          </div>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import ZButton from './z-button/ZButton.vue'
// import { ButtonType } from '@/components/z-button'
import type { ButtonProps } from 'ant-design-vue'

const cartStore = useCartStore()

const totalPrice = computed((): string => cartStore.totalPrice + 'đ')

const cartItems = cartStore.cartItems

const isVisibleList = ref(false)
function toggleList() {
  isVisibleList.value = !isVisibleList.value
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  position: relative;
  width: 40px;
  cursor: pointer;
  .quantity {
    position: absolute;
    top: 45%;
    left: 60%;
    transform: translate(-50%, -50%);

    font-size: 0.9rem;
  }
}

.header-item {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: #333;
    visibility: hidden;
  }
}
.header-item:hover::after {
  visibility: visible;
}
</style>
