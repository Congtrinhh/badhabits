<template>
  <div class="z-cart-item-wrapper">
    <div class="img-wrapper">
      <img :src="props.data.avatarUrl" alt="" />
    </div>
    <div class="info-wrapper">
      <div class="name-wrapper">{{ props.data.name }}</div>
      <div class="color-size-wrapper"></div>
      <div class="update-quantity-wrapper">
        <ZInputProductQuantity
          :data="props.data.quantity"
          @increase="handleIncrease"
          @decrease="handleDecrease"
          @change="handleChange"
        ></ZInputProductQuantity>
      </div>
      <div class="price-wrapper">
        <div class="current-price">{{ currentPrice }}</div>
        <div class="initial-price">{{ initialPrice }}</div>
      </div>
    </div>
    <div class="buttons">
      <div class="delete-button" @click="deleteItem">&times;</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CartItem } from "@/models/cart-item.model";
import { ref } from "vue";
import ZInputProductQuantity from "./ZInputProductQuantity.vue";
import { computed } from "vue";
import { watch } from "vue";
interface IProp {
  data: CartItem;
}

const props = withDefaults(defineProps<IProp>(), {});
const emit = defineEmits(["change", "increase", "decrease", "delete"]);

const currentPrice = computed((): string => {
  return props.data.price + "đ";
});
const initialPrice = computed((): string => {
  return props.data.price + "đ";
});

function handleIncrease() {
  emit("increase");
}
function handleDecrease() {
  emit("decrease");
}
function handleChange(quantity: number) {
  emit("change", quantity);
}

function deleteItem() {
  emit("delete");
}
</script>

<style lang="scss" scoped>
.z-cart-item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  .img-parent {
    border-radius: 8px;
    overflow: hidden;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
