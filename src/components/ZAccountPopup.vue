<template>
  <div id="zAccountPopupWrapper">
    <div class="toggle header-item" @click="active = !active">
      <img src="@/assets/icons/account.webp" alt="" />
    </div>
    <a-popover v-model:open="active" trigger="click">
      <template #content>
        <div class="popup">
          <!-- logged in -->
          <div class="logged-in-wrapper">
            <div class="account-greeting-wrapper">
              <div class="greeting-text">Chào Trịnh Quý Công</div>
              <div class="badge">NEW</div>
            </div>
            <div class="option-list">
              <div class="list-item">Theo dõi đơn hàng</div>
              <div class="list-item">Sản phẩm yêu thích</div>
              <div class="list-item">Ưu đãi của bạn</div>
            </div>
            <div class="action-list">
              <div class="list-item">Đăng xuất</div>
            </div>
          </div>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<style scoped lang="scss">
.logged-in-wrapper {
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
}

.popup {
  background-color: #fff;
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  // border-radius: 4px;
  min-width: 200px;
}

.toggle {
  position: relative;
  cursor: pointer;
  width: 40px;
}

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
</style>
