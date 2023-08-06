<template>
  <div id="searchProductWrapper">
    <div class="btn-show-content header-item" @click="hasShow = true">
      <div class="icon">
        <img src="@/assets/icons/search.webp" alt="search icon" />
      </div>
    </div>
    <div class="search-wrapper" v-if="hasShow">
      <div class="search-box">
        <!-- <v-icon icon="mdi mdi-magnify"></v-icon> -->
        <input
          v-auto-focus="true"
          placeholder="Bạn đang tìm kiếm sản phẩm nào?"
          @input="searchKeyword"
        />
        <div class="close-button" @click="hasShow = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
            />
          </svg>
        </div>
      </div>
      <div class="keyword-list">
        <div class="list-item" v-for="keyword in keywords" :key="keyword.id">
          {{ keyword.name }}
        </div>
      </div>
      <div class="action-buttons"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const hasShow = ref(false)

const keywords = ref<any[]>([
  { id: 1, name: 'áo khoác' },
  { id: 2, name: 'quần đùi' }
])

function searchKeyword(event: any) {
  // call api search
}
</script>

<style lang="scss" scoped>
.header-item {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background-color: #333;
    visibility: hidden;
  }
}
.header-item:hover::after {
  visibility: visible;
}

#searchProductWrapper {
  position: relative;
  .search-wrapper {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #fff;
    border: 2px solid #000;

    display: flex;
    flex-direction: column;
  }
}

.btn-show-content {
  cursor: pointer;

  display: flex;
  .icon {
    width: 40px;
  }
}

.search-box {
  width: 100%;
  display: flex;
  border-bottom: 2px solid #000;
  padding: 4px 0;
  input {
    outline-color: transparent;
    margin-left: 12px;
    flex-grow: 1;
    border: none;
  }
  .close-button {
    cursor: pointer;
    display: flex;
  }
}

.keyword-list {
  overflow: auto;
  flex-grow: 1;
  margin-top: 16px;
}
</style>
