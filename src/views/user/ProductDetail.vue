<template>
  <div id="productDetailWrapper">
    <div class="product-info-wrapper">
      <div class="image-slider-wrapper"></div>
      <div class="detail-wrapper">
        <h3 class="product-name">
          {{ product.name }}
        </h3>
        <div class="product-price-wrapper">
          <div class="current-price">{{ product.price }}</div>
          <div class="previous-price">{{ product.price }}</div>
          <div class="discount-percent-label">-2%</div>
        </div>

        <div class="color-selection-wrapper">
          <span>Chọn màu sắc</span>
          <div class="color-list">
            <div class="list-item" v-for="color in colors" :key="color.id">
              <!-- <img src="" alt=""> -->
              {{ color.name }}
            </div>
          </div>
        </div>

        <div class="size-selection-wrapper">
          <span>Chọn size</span>
          <div class="size-list">
            <v-radio-group v-model="selectedSizeId" inline>
              <v-radio v-for="size in sizes" :key="size.id" :name="size.name" :value="size.id">
                <template #label>
                  <div :class="['size-item', { active: size.id === selectedSizeId }]">
                    {{ size.name }}
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>

        <div class="quantity-wrapper">
          <div class="quantity-button-wrapper">
            <span @click="decrease" class="decrease-button">-</span>
            <input type="number" v-model="product.quantity" />
            <span @click="increase" class="increase-button">+</span>
          </div>

          <a-button @click="addProductToCart">MUA NGAY</a-button>

          <v-icon icon="mdi-heart-outline" size="large"></v-icon>
        </div>

        <div class="outstanding-feature-wrapper">
          <div class="feature" v-for="feature in features" :key="feature.id">
            <v-icon class="icon" :icon="feature.icon" size="x-large"></v-icon>
            <div class="detail-wrapper">
              <div class="title">{{ feature.title }}</div>
              <div class="desc bold">{{ feature.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- product detail information -->
      <div class="product-detail-information-wrapper"></div>

      <!-- customer review -->
      <div class="customer-review-wrapper"></div>
    </div>
    <div class="related-products-wrapper">
      <div class="title">Sản phẩm gợi ý dành riêng cho bạn</div>
      <div class="list">
        <VRow>
          <VCol sm="6" md="4" lg="3" v-for="item in relatedProducts" :key="item.id">
            <v-sheet class="pa-3 ma-3">
              <ZProduct :data="item" />
            </v-sheet>
          </VCol>
        </VRow>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CartItem } from '@/models/cart-item.model'
import { Color } from '@/models/color.model'
import { Product } from '@/models/product.model'
import { Size } from '@/models/size.model'
import { onMounted, watch } from 'vue'
import { ref } from 'vue'
import ZProduct from '@/components/ZProduct.vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/store/cart'

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
</script>

<style lang="scss" scoped>
:deep(.size-list .v-selection-control__wrapper) {
  display: none;
}

:deep(.size-list .v-label) {
  opacity: 1;
}

.size-item {
  border: 1px solid #000;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;

  &.active {
    background-color: #333;
    color: #fff;
  }
}

.outstanding-feature-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f7f7f7;
  padding: 16px;

  .feature {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;

    .desc {
      font-size: 12px;
      color: #737373;
      &.bold {
        font-weight: 700;
        font-size: 15px;
        color: #000;
      }
    }
  }
}

.related-products-wrapper {
  .title {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    color: rgb(213, 15, 15);
  }
}
</style>
