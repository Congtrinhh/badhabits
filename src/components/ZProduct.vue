<template>
  <div class="z-product">
    <div class="img-parent">
      <router-link :to="linkTo">
        <img :src="data.imageUrl" alt="a product's image" />
      </router-link>
    </div>
    <!-- tên và giá -->
    <div class="detail-wrapper">
      <div class="name">{{ data.name }}</div>
      <div class="price-wrapper">
        <div class="initial-price">{{ data.price }}</div>
        <div class="current-price">{{ data.price }}</div>
      </div>
    </div>
    <!-- nhãn giảm giá bao nhiêu % -->
    <div class="sale-off-wrapper"><div class="amount">50%</div></div>
    <!-- loại sp (hot/new arrivals/..) -->
    <div class="tag-wrapper">
      <div class="tag-item" v-for="tag in tags" :key="tag.id">{{ tag.name }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from '@/models/product.model'
import { computed } from 'vue'

interface IProp {
  data: Product
}

const props = withDefaults(defineProps<IProp>(), {})

const linkTo = computed((): string => {
  return `/product-detail/${props.data?.slug}`
})

const tags = [{ id: 1, name: 'best seller' }]
</script>

<style scoped lang="scss">
.z-product {
  display: flex;
  flex-direction: column;

  position: relative;
}
.img-parent {
  a {
    text-decoration: none;
    color: #333;
    display: block;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
}
.detail-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .name {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    // display 2 lines at most
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .price-wrapper {
    display: flex;
    text-transform: uppercase;
    align-items: baseline;
    gap: 8px;
    .initial-price {
      text-decoration: line-through;
      font-size: 12px;
    }
    .current-price {
      color: var(--secondary-color);
    }
  }
}
.sale-off-wrapper {
  position: absolute;
  right: 0;
  top: 50%;

  background: url(@/assets/product-list/sale-off.png) no-repeat;
  background-size: contain;
  height: 35px;
  width: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  .amount {
    font-size: 12px;
    font-weight: bold;
  }
}

.tag-wrapper {
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  padding: 0 5px;

  background-color: var(--secondary-color);
  filter: brightness(120%);
  .tag-item {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
  }
}
</style>
