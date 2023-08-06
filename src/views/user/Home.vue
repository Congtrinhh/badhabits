<template>
  <main id="home">
    <!-- barcode -->
    <section class="section-barcode">
      <img src="@/assets/home/welcome.webp" alt="barcode welcome" />
    </section>

    <!--  -->
    <section class="section-bg-scroll first">
      <div class="container">
        <div class="col-banner left">
          <div class="banner top"></div>
          <div class="banner bottom"></div>
        </div>
        <div class="col-banner right">
          <div class="banner"></div>
        </div>
      </div>
    </section>

    <!-- gallery  -->
    <section class="section-banner">
      <div class="container">
        <a-row>
          <a-col :xs="24">
            <div class="banner">
              <img src="@/assets/home/banner-rebels.webp" alt="banner-rebels" />
            </div>
          </a-col>
          <a-col :xs="24">
            <div class="banner">
              <img src="@/assets/home/banner-make.webp" alt="banner-make" />
            </div>
          </a-col>
          <a-col :xs="24">
            <div class="banner">
              <img src="@/assets/home/banner-difference.webp" alt="banner-difference" />
            </div>
          </a-col>
          <a-col :xs="24">
            <div class="banner">
              <img src="@/assets/home/banner-2023.webp" alt="banner-2023" />
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- hero -->

    <!-- new arrivals -->

    <!-- best sellers -->
    <a-row>
      <a-col :xs="24" :md="12" :lg="8" :xl="6" v-for="product in bestSellers" :key="product.id">
        <ZProduct :data="product"></ZProduct>
      </a-col>
    </a-row>

    <!-- blog posts list -->

    <!-- register email -->
  </main>
</template>

<script lang="ts" setup>
import { Product } from '@/models/product.model'
import { ref } from 'vue'
import { onMounted } from 'vue'
import ZProduct from '@/components/ZProduct.vue'

const bestSellers = ref<Product[]>([
  {
    id: 1,
    name: 'Áo denim hiệu TÌM',
    price: 2990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  },
  {
    id: 2,
    name: 'Áo devil hiệu TÌM',
    price: 3990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  },
  {
    id: 3,
    name: 'Áo blazer hiệu TÌM',
    price: 6990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  },
  {
    id: 4,
    name: 'Quần tây khoá size-tab hiệu TÌM',
    price: 9990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  },
  {
    id: 5,
    name: 'Quần tây phong cách Sartorial hiệu TÌM',
    price: 9990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  }
])

onMounted(() => {
  getBestSellers()
})

function getBestSellers() {
  //
}
</script>

<style scoped></style>
