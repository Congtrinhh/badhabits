<template>
  <div id="productListWrapper">
    <h2>Thời trang nam</h2>
    <div class="main-content">
      <div class="filter"></div>
      <div class="product-list">
        <VRow>
          <VCol
            sm="6"
            md="4"
            lg="3"
            v-for="product in products"
            :key="product.id"
          >
            <v-sheet class="pa-3 ma-3">
              <ZProduct :data="product"></ZProduct>
            </v-sheet>
          </VCol>
        </VRow>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ZProduct from "@/components/ZProduct.vue";
import { Product } from "@/models/product.model";

const products = ref<Product[]>([
  {
    id: 1,
    name: "Áo denim hiệu TÌM",
    price: 2990000,
    imageUrl: "https://picsum.photos/400",
    shortDesc: "Siêu đẹp và rẻ nha mọi người",
  },
  {
    id: 2,
    name: "Áo devil hiệu TÌM",
    price: 3990000,
    imageUrl: "https://picsum.photos/400",
    shortDesc: "Siêu đẹp và rẻ nha mọi người",
  },
  {
    id: 3,
    name: "Áo blazer hiệu TÌM",
    price: 6990000,
    imageUrl: "https://picsum.photos/400",
    shortDesc: "Siêu đẹp và rẻ nha mọi người",
  },
  {
    id: 4,
    name: "Quần tây khoá size-tab hiệu TÌM",
    price: 9990000,
    imageUrl: "https://picsum.photos/400",
    shortDesc: "Siêu đẹp và rẻ nha mọi người",
  },
  {
    id: 5,
    name: "Quần tây phong cách Sartorial hiệu TÌM",
    price: 9990000,
    imageUrl: "https://picsum.photos/400",
    shortDesc: "Siêu đẹp và rẻ nha mọi người",
  },
]);
</script>

<style lang="scss" scoped></style>
