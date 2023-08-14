<template>
  <main id="home">
    <!-- barcode -->
    <section class="section-barcode">
      <img src="@/assets/home/welcome.webp" alt="barcode welcome" />
    </section>

    <!-- section scroll 1 -->
    <section class="section-bg-scroll first">
      <div class="container">
        <div class="col-banner left">
          <div class="banner top"><img src="@/assets/home/bg1-left-inner-1.webp" alt="" /></div>
          <div class="banner bottom">
            <img src="@/assets/home/bg1-left-inner-2.webp" alt="" />
          </div>
        </div>
        <div class="col-banner right">
          <div class="banner"><img src="@/assets/home/bg1-right-inner.webp" alt="" /></div>
        </div>
      </div>
    </section>

    <!-- section banner first  -->
    <section class="section-banner first">
      <div class="container">
        <a-row :gutter="30">
          <a-col :xs="24" :md="12">
            <div class="banner">
              <img src="@/assets/home/banner-rebels.webp" alt="banner-rebels" />
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="banner">
              <img src="@/assets/home/banner-make.webp" alt="banner-make" />
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="banner">
              <img src="@/assets/home/banner-difference.webp" alt="banner-difference" />
            </div>
          </a-col>
          <a-col :xs="24" :md="12">
            <div class="banner">
              <img src="@/assets/home/banner-2023.webp" alt="banner-2023" />
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- section scroll 2 -->
    <section class="section-bg-scroll second">
      <div class="container">
        <div class="col-banner"><img src="@/assets/home/bg2-inner-1.webp" alt="" /></div>
        <div class="col-banner"><img src="@/assets/home/bg2-inner-2.webp" alt="" /></div>
      </div>
    </section>

    <!-- section banner second -->
    <section class="section-banner second">
      <div class="container">
        <img src="@/assets/home/banner-products.webp" alt="grid products" />
      </div>
    </section>

    <!-- best sellers -swiper js -->
    <section class="section-best-selling">
      <div class="container">
        <div class="header">
          <h2 class="text">Best-selling items</h2>
          <div class="icon"></div>
        </div>
        <div class="list-wrapper">
          <swiper
            :watchSlidesProgress="true"
            :slides-per-view="2.5"
            class="swiperBestSelling"
            :rewind="true"
            :navigation="{
              prevEl: '.swiper-custom-prev-button',
              nextEl: '.swiper-custom-next-button'
            }"
            :modules="swiperModules"
            :breakpoints="{
              992: {
                slidesPerView: 3
              }
            }"
          >
            <swiper-slide
              v-for="product in bestSellers"
              :key="product.id"
              style="margin-right: 10px"
            >
              <ZProduct :data="product"></ZProduct>
            </swiper-slide>

            <!-- <template #container-end> -->
            <div class="swiper-custom-prev-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <mask id="ipSLeftOne0">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M30 36L18 24l12-12v24Z"
                  />
                </mask>
                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLeftOne0)" />
              </svg>
            </div>
            <div class="swiper-custom-next-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <mask id="ipSRightOne0">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="m20 12l12 12l-12 12V12Z"
                  />
                </mask>
                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRightOne0)" />
              </svg>
            </div>
            <!-- </template> -->
          </swiper>
        </div>
      </div>
    </section>

    <!-- section banner third -->
    <section class="section-banner third">
      <div class="container">
        <img src="@/assets/home/banner-section-3.webp" alt="3 fashion men" />
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Product } from '@/models/product.model'
import { ref } from 'vue'
import { onMounted } from 'vue'
import ZProduct from '@/components/ZProduct.vue'
import 'swiper/css'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

//#region Swiper
// Swiper

import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()
//#endregion
const v =
  'https://docs.google.com/document/d/1KCcq1AiExIqCB-x82HH4TXPnwAxRp6G0/edit?usp=sharing&ouid=117528695748394761576&rtpof=true&sd=true'

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
  },
  {
    id: 6,
    name: 'Quần tây phong cách Sartorial hiệu TÌM',
    price: 9990000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người'
  },
  {
    id: 7,
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

const swiperModules = [Navigation]
</script>

<style scoped lang="scss">
#home {
  .section-bg-scroll.first,
  .section-banner.first {
    margin-bottom: 100px;
  }
}
.section-barcode {
  padding-bottom: 40px;
}

.section-bg-scroll.first {
  background-image: url(@/assets/home/bg1.webp);
  overflow: auto;

  // min-height: 500px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    margin-top: 100px;
    margin-bottom: 100px;

    padding: 0 16px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;

    .col-banner.left {
      grid-column: 1 / 2;
      grid-row: 1 / 3;

      display: flex;
      flex-direction: column;
      gap: 45px;
    }
    .col-banner.right {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
}

.section-banner.first {
  margin-bottom: 50px;
  .container {
    padding: 0 16px;
    .banner {
      margin-bottom: 30px;
    }
  }
}

.section-bg-scroll.second {
  background-image: url(@/assets/home/bg2.webp);
  overflow: auto;

  // min-height: 500px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    margin-top: 100px;
    margin-bottom: 100px;
    padding: 0 16px;

    display: flex;
    gap: 20px;
    align-items: center;
    .col-banner {
      flex-basis: 50%;
      flex-grow: 1;
    }
  }
}

.section-best-selling {
  margin-bottom: 40px;
  .container {
    max-width: 1440px;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 15px;
    padding-right: 15px;
    .text {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }

  .list-wrapper {
    padding-bottom: 60px;
  }
}

.section-banner.second {
  margin-bottom: 50px;
}

.section-banner.third {
  margin-bottom: 50px;
}

/** Swiper */
.swiperBestSelling {
  overflow-y: visible;
}

.swiper-custom-prev-button,
.swiper-custom-next-button {
  width: 40px;
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}
.swiper-custom-prev-button {
  top: calc(100% + 20px);
  left: 20px;
}
.swiper-custom-next-button {
  top: calc(100% + 20px);
  left: 60px;
}

// Responsive
@media (min-width: 576px) {
  .section-bg-scroll.second {
    .container {
      gap: 46px;
    }
  }
}
@media (min-width: 992px) {
  .section-bg-scroll.first {
    .container {
      max-width: 45%;
      gap: 96px;
      .col-banner.left {
        gap: 65px;
      }
    }
  }

  .section-banner.first {
    margin-bottom: 100px;
    .container {
      width: 60%;
    }
  }

  .section-banner.second {
    margin-bottom: 100px;
  }

  .section-bg-scroll.second {
    .container {
      width: 65%;
      gap: 92px;
    }
  }

  .section-banner.third {
    margin-bottom: 100px;
  }

  .section-best-selling {
    margin-bottom: 70px;
  }
}
</style>
