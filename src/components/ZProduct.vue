<template>
  <router-link :to="linkTo" class="z-product">
    <img :src="data.imageUrl" alt="" />
    <div class="detail-wrapper">
      <div class="name">{{ data.name }}</div>
      <div class="price-wrapper">
        <div class="initial-price">{{ data.price }}</div>
        <div class="current-price">{{ data.price }}</div>
      </div>
      <div class="description">{{ data.shortDesc }}</div>
      <div class="discount-amount"></div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import { Product } from "@/models/product.model";
import { computed } from "vue";

interface IProp {
  data: Product;
}

const props = withDefaults(defineProps<IProp>(), {});

const linkTo = computed((): string => {
  return `/product-detail/${props.data?.slug}`;
});
</script>

<style scoped>
.z-product {
  text-decoration: none;
  color: #333;
  display: inline-block;
}
</style>
