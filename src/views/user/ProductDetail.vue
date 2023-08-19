<template>
  <div id="productDetailWrapper">
    <main class="top">
      <!-- slider one -->
      <div class="slider-wrapper first">
        <swiper
          id="fistSwiper"
          :allowTouchMove="isMobile"
          :watchSlidesProgress="true"
          :slides-per-view="1"
          :rewind="true"
          :navigation="{
            prevEl: '.swiper-custom-prev-button'
          }"
          :pagination="isMobile ? paginationConfig : false"
          :modules="swiperModules"
          @swiper="onFirstSwiper"
        >
          <swiper-slide v-for="image in mobileImages" :key="image.id">
            <img class="slider-img" :src="image.url" alt="an image for product" />
          </swiper-slide>
          <div @click="handlePrevSlide" class="swiper-custom-prev-button">
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
        </swiper>
      </div>
      <!-- slider two -->
      <div class="slider-wrapper second">
        <swiper
          :allowTouchMove="false"
          :watchSlidesProgress="true"
          :slides-per-view="1"
          :rewind="true"
          :navigation="{
            nextEl: '.swiper-custom-next-button'
          }"
          :pagination="isMobile ? paginationConfig : false"
          :modules="swiperModules"
          @swiper="onSecondSwiper"
        >
          <swiper-slide v-for="image in mobileImages" :key="image.id">
            <img class="slider-img" :src="image.url" alt="an image for product" />
          </swiper-slide>
          <div @click="handleNextSlide" class="swiper-custom-next-button">
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
        </swiper>
      </div>

      <!-- product info -->
      <div class="product-info-wrapper">
        <div class="name">{{ product.name }}</div>
        <div class="price-wrapper">
          <div class="initial-price">{{ product.price }}</div>
          <div class="current-price">{{ product.price }}</div>
        </div>
        <div class="type">oversized fit</div>
        <div class="feature-wrapper">
          <div class="title">Features:</div>
          <div class="content">
            <ul class="list">
              <li>Chất liệu: Cotton cao cấp</li>
              <li>Graphic: In mặt trước và mặt sau, Logo trên tay áo được thêu</li>
              <li>Kỹ thuật: in và thêu</li>
            </ul>
          </div>
        </div>

        <div class="horizontal-line"></div>

        <div class="select-option-wrapper">
          <div class="select-option-group select-size-wrapper">
            <span class="title">size:</span>
            <ul class="list">
              <li class="list-item" v-for="size in sizes" :key="size.id">{{ size.name }}</li>
            </ul>
          </div>
          <div class="select-size-guide">HƯỚNG DẪN CHỌN SIZE</div>
          <div class="return-policy">CHÍNH SÁCH ĐỔI TRẢ</div>
          <button class="add-to-cart-button">
            <div class="text">thêm vào giỏ hàng</div>
            <div class="icon"></div>
          </button>
          <div class="signature"></div>
        </div>
      </div>
    </main>
    <section class="bottom">
      <div class="container">
        <div class="title">bạn cũng có thể thích</div>
        <a-row :gutter="[15, 15]">
          <a-col
            :xs="{ span: 12 }"
            :lg="{ span: 6 }"
            v-for="product in relatedProducts"
            :key="product.id"
          >
            <ZProduct :data="product" />
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { CartItem } from '@/models/cart-item.model'
import { Color } from '@/models/color.model'
import { Product } from '@/models/product.model'
import { Size } from '@/models/size.model'
import { computed, onMounted, watch } from 'vue'
import { ref } from 'vue'
import ZProduct from '@/components/ZProduct.vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
// register Swiper custom elements

const cartStore = useCartStore()

const product = ref<Product>({
  id: 1,
  name: 'Quần âu size-tab hiệu TÌM',
  price: 999000,
  imageUrl: 'https://picsum.photos/400',
  shortDesc: 'Siêu đẹp và rẻ nha mọi người',
  quantity: 1
})
onMounted(() => {
  // get slug from url route and call api get product
  const route = useRoute()
  const slug = route.params.slug
  console.log(slug)

  product.value = {
    id: 1,
    name: 'Quần âu size-tab hiệu TÌM',
    price: 999000,
    imageUrl: 'https://picsum.photos/400',
    shortDesc: 'Siêu đẹp và rẻ nha mọi người',
    quantity: 1
  }
})

const colors = ref<Color[]>([
  { id: 1, name: 'Trắng' },
  { id: 2, name: 'Xanh trời' }
])
const sizes = ref<Size[]>([
  { id: 1, name: 'S' },
  { id: 2, name: 'M' },
  { id: 3, name: 'L' },
  { id: 4, name: 'XL' }
])

const selectedSizeId = ref<number>()

watch(
  () => selectedSizeId.value,
  (value) => console.log(value)
)

function decrease() {
  if (product.value.quantity > 0) {
    product.value.quantity--
  }
}
function increase() {
  product.value.quantity++
}

function addProductToCart() {
  const cartItem: CartItem = {
    id: new Date().getTime(),
    name: product.value.name,
    price: product.value.price,
    quantity: product.value.quantity!
  }
  cartStore.saveCartItem(cartItem)
}

const features = ref<any[]>([
  {
    id: 1,
    title: 'Giao hàng nhanh',
    desc: 'Từ 2 - 5 ngày',
    icon: 'mdi-clock-fast'
  },
  {
    id: 2,
    title: 'Miễn phí vận chuyển',
    desc: 'Đơn hàng từ 399K',
    icon: 'mdi-truck'
  },
  {
    id: 3,
    title: 'Theo dõi đơn hàng một cách dễ dàng',
    desc: '',
    icon: 'mdi-file-search-outline'
  },
  {
    id: 4,
    title: 'Đổi trả linh hoạt',
    desc: 'Với sản phẩm sale < 30%',
    icon: 'mdi-swap-horizontal'
  },
  {
    id: 5,
    title: 'Thanh toán dễ dàng nhiều hình thức',
    desc: '',
    icon: 'mdi-credit-card-outline'
  },
  {
    id: 6,
    title: 'Hotline hỗ trợ',
    desc: '039 9999 365',
    icon: 'mdi-face-agent'
  }
])

const relatedProducts = ref<Product[]>([
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

const swiperModules = [Navigation, Pagination]
const mobileImages = [
  { id: 1, url: 'https://picsum.photos/800' },
  { id: 1, url: 'https://picsum.photos/800' },
  { id: 1, url: 'https://picsum.photos/800' },
  { id: 1, url: 'https://picsum.photos/800' },
  { id: 1, url: 'https://picsum.photos/800' }
]

//#region Swiper
const paginationConfig = computed((): any => {
  let config = {
    clickable: true
  }

  return config
})

const firstSwiper = ref()
const secondSwiper = ref()

function onFirstSwiper(swiper: any) {
  firstSwiper.value = swiper
}
function onSecondSwiper(swiper: any) {
  secondSwiper.value = swiper
}

function handlePrevSlide() {
  firstSwiper.value.slidePrev()
  console.log('go to the previous slide')

  secondSwiper.value.slidePrev()
}
function handleNextSlide() {
  firstSwiper.value.slideNext()
  console.log('go to the next slide')

  secondSwiper.value.slideNext()
}

const isMobile = computed((): boolean => {
  if (window.outerWidth >= 992) return false
  return true
})
//#endregion
</script>

<style lang="scss" scoped>
#productDetailWrapper {
  display: flex;
  flex-direction: column;
  padding: 48px 0;

  main.top {
    padding: 0 15px;
  }
  section.bottom {
    margin-top: 70px;
  }
}
main.top {
  display: flex;
  flex-direction: column;
  .slider-wrapper.second {
    display: none;
  }
}

.slider-img {
  width: 100%;
  object-fit: cover;
}

.product-info-wrapper {
  display: flex;
  flex-direction: column;

  .name {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .price-wrapper {
    margin-bottom: 15px;

    display: flex;
    align-items: baseline;
    gap: 20px;

    div {
      font-size: 22px;
      font-weight: bold;
      line-height: 1.5;
    }
  }
  .type {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .feature-wrapper {
    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content {
      ul {
        list-style: decimal;
        li {
          margin-bottom: 10px;
        }
      }
    }
  }

  .horizontal-line {
    height: 6px;
    width: 100%;
    background-color: var(--primary-color);
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .select-option-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    .select-option-group {
      display: flex;
      align-items: baseline;
      .title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 22px;
      }
      .list {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .select-size-guide,
    .return-policy {
      color: var(--text-color);
      text-transform: uppercase;
      font-weight: bold;
      text-decoration: underline;
      font-size: 22px;
      cursor: pointer;
    }

    .add-to-cart-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      width: 90%;
      background-color: var(--secondary-color);
      border-radius: 3px;
      border: none;

      margin-top: 15px;
      cursor: pointer;
      .text {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
        line-height: 1.2em;
        text-align: left;
      }
      .icon {
        background-image: url(@/assets/product-detail/cart.webp);
        min-width: 30px;
        min-height: 30px;
        background-size: contain;
      }
    }

    .signature {
      background-image: url(/src/assets/product-detail/signature.webp);
      width: 100%;
      height: 75px;
      background-repeat: no-repeat;
      background-size: contain;

      margin-top: 24px;
    }
  }
}

/** Responsive */
@media (min-width: 992px) {
  #productDetailWrapper {
    display: flex;
    flex-direction: column;
    main.top {
      padding-left: 0;
      padding-right: 0;
    }
  }

  main.top {
    flex-direction: row;
    gap: 15px;
    align-items: flex-start;
    .slider-wrapper {
      flex-basis: 35%;
      overflow: hidden;
    }
    .slider-wrapper.first {
      order: 1;
      padding-right: 20px;
    }
    .slider-wrapper.second {
      display: flex;
      order: 3;
      padding-left: 20px;
    }
    .product-info-wrapper {
      order: 2;
    }
  }

  .product-info-wrapper {
    .name {
      font-size: 34px;
    }

    .select-option-wrapper {
      .select-option-group {
        .title {
          font-size: 28px;
        }
      }

      .select-size-guide,
      .return-policy {
        font-size: 28px;
      }

      .add-to-cart-button {
        display: inline-flex;
        width: auto;
        padding: 10px 20px;
      }
    }
  }

  // swiper
  .slider-wrapper {
    position: relative;
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
    z-index: 9;
  }
  .swiper-custom-prev-button {
    top: 50%;
    left: 45px;
    transform: translate(0, -50%);
  }
  .swiper-custom-next-button {
    top: 50%;
    right: 45px;
    transform: translate(0, -50%);
  }
}
</style>
