<template>
  <div id="header">
    <!-- top (logo, cart, account, searchbox) -->
    <div class="top">
      <div class="left-wrapper">
        <div class="toggle-wrapper" @click="showSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="logo-wrapper">
          <img src="@/assets/icons/logo.webp" alt="" />
        </div>
      </div>

      <div class="right-wrapper">
        <ZSearchProduct></ZSearchProduct>
        <ZCartPopup></ZCartPopup>
        <ZAccountPopup></ZAccountPopup>
      </div>
      <!-- sidebar -->
      <aside class="sidebar-wrapper" v-show="isVisibleSidebar">
        <div class="sidebar-content">
          <div class="list">
            <div v-for="item in sidebarItems" :key="item.id" class="item">
              {{ item.text }}
            </div>
          </div>
          <div class="close-button" @click="hideSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
              />
            </svg>
          </div>
        </div>
        <div class="overlay" @click="hideSidebar"></div>
      </aside>
    </div>

    <!-- banner -->
    <section class="banner" v-if="isVisibleBanner">
      <img
        alt="banner"
        src="https://file.hstatic.net/1000351433/file/banner_web__2__6e60cef6c17a41589f0aa493cdf8374b.png"
      />
    </section>

    <!-- navbar -->
    <nav class="navbar" id="userLayoutNavbar">
      <div v-for="item in sidebarItems" :key="item.id" class="item">
        {{ item.text }}
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import ZCartPopup from '@/components/ZCartPopup.vue'
import ZAccountPopup from '@/components/ZAccountPopup.vue'
import ZSearchProduct from '@/components/ZSearchProduct.vue'
import { ref } from 'vue'

//#region Sidebar
const sidebarItems = [
  {
    id: 1,
    text: 'Best seller',
    to: '/best-seller'
  },
  {
    id: 2,
    text: 'Áo thun',
    to: '/shirt'
  },
  {
    id: 3,
    text: 'Áo khoác',
    to: '/coat'
  },
  {
    id: 4,
    text: 'Áo sơ mi',
    to: '/coat'
  },
  {
    id: 5,
    text: 'Quần tây',
    to: '/coat'
  },
  {
    id: 6,
    text: 'Quần bò',
    to: '/coat'
  }
]
const isVisibleSidebar = ref(false)
function showSidebar() {
  isVisibleSidebar.value = true
}
function hideSidebar() {
  isVisibleSidebar.value = false
}

//#endregion

//#region Banner
const isVisibleBanner = ref(true)
//#endregion

//#region Navbar

//#endregion
</script>

<style scoped lang="scss">
#header {
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }
  .left-wrapper {
    display: flex;
    align-items: center;
    .toggle-wrapper {
      cursor: pointer;
      margin-right: 40px;
    }
    .logo-wrapper {
      width: 40px;
    }
  }
  .right-wrapper {
    display: flex;
    align-items: center;
    column-gap: 40px;
  }
}

/* Sidebar */
.sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  display: flex;

  transition: all 0.35s ease;

  .sidebar-content {
    width: 80%;
    height: 100%;
    background-color: #fff;
    padding: 16px;
    position: relative;
    .list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .item {
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
    .close-button {
      position: absolute;
      left: 100%;
      top: 0;
      background-color: #333;
      color: #fff;

      display: flex;

      cursor: pointer;
    }
  }
  .overlay {
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

/* Banner */

/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  overflow-x: auto;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .item {
    text-transform: uppercase;
    font-weight: bold;
    padding: 6px 12px;
    font-size: 1.1rem;
    white-space: nowrap;

    position: relative;
    &:hover::after {
      content: '';
      position: absolute;
    }
  }
}

@media (min-width: 992px) {
  .toggle-wrapper {
    display: none;
  }
}

@media (min-width: 1200px) {
  #header {
    .right-wrapper {
      column-gap: 60px;
    }
  }
}

@media (min-width: 1600px) {
  #header {
    .right-wrapper {
      column-gap: 80px;
    }
  }
}
</style>
