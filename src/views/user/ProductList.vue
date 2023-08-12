<template>
  <div id="productListWrapper">
    <main class="main-content">
      <div class="sidebar" :style="sidebarStyles">
        <ul class="list">
          <li class="list-item" v-for="item in sidebarItems" :key="item.id">
            <router-link :to="item.to">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="product-list">
        <div class="container">
          <a-row :gutter="[15, 15]">
            <a-col
              :xs="{ span: 12 }"
              :lg="{ span: 6 }"
              v-for="product in products"
              :key="product.id"
            >
              <ZProduct :data="product"></ZProduct>
            </a-col>
          </a-row>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import ZProduct from '@/components/ZProduct.vue'
import { Product } from '@/models/product.model'

const products = ref<Product[]>([
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

const sidebarItems = [
  { id: 1, name: 'best seller', to: '/best-seller' },
  { id: 2, name: 'áo thun', to: '/t-shirt' },
  { id: 3, name: 'quần bò', to: '/jeans' }
]

const sidebarStyles = reactive({})

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const footer = document.getElementById('footer')!
const sidebar = document.querySelector('.sidebar')!
function scrollHandler() {
  const sidebarHeight = sidebar.clientHeight
  const footerTop = footer.getBoundingClientRect().top
  const scrollPosition = window.scrollY

  if (scrollPosition + sidebarHeight > footerTop) {
    const offsetY = scrollPosition + sidebarHeight - footerTop
    sidebar.style.transform = `translateY(-${offsetY}px)`
  } else {
    sidebar.style.transform = 'none'
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<style lang="scss" scoped>
#productListWrapper {
  padding-top: 48px;
}
.product-list {
}

.sidebar {
  display: none;
}

@media (min-width: 992px) {
  .main-content {
    display: flex;
  }
  .sidebar {
    display: block;
    flex: 0 0 auto;
    width: 250px;
    background-color: var(--secondary-color);
    padding: 24px 12px;

    // position: fixed;
    .list {
      display: flex;
      flex-direction: column;
      gap: 10px;

      position: sticky;
      top: 15px;
      .list-item {
        a {
          font-size: 18px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
  }

  .product-list {
    flex: 1;
    .container {
      max-width: 100%;
    }
  }
}

@media (min-width: 1200px) {
  .sidebar {
    width: 300px;
  }
}
</style>
