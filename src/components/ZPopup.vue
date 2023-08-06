<template>
  <div class="z-popup" v-if="visible">
    <template v-if="type == PopupTypeEnum.confirmDelete">
      <div class="header-wrapper">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
      <div class="content-wrapper">
        <slot name="content">{{ content }}</slot>
      </div>
      <div class="footer-wrapper">
        <slot name="footer">
          <a-button @click="handleCancelDelete">Không</a-button>
          <a-button @click="handleConfirmDelete">Có</a-button>
        </slot>
      </div>
    </template>
    <template v-else-if="type == PopupTypeEnum.notification">
      <div class="header-wrapper">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
      <div class="content-wrapper">
        <slot name="content">{{ content }}</slot>
      </div>
      <div class="footer-wrapper">
        <slot name="footer">
          <a-button @click="handleClose">Đóng</a-button>
        </slot>
      </div>
    </template>
    <template v-else-if="type == PopupTypeEnum.confirmExit">
      <div class="header-wrapper">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
      <div class="content-wrapper">
        <slot name="content">{{ content }}</slot>
      </div>
      <div class="footer-wrapper">
        <slot name="footer">
          <a-button @click="handleCancelExit">Không</a-button>
          <a-button @click="handleConfirmExit">Có</a-button>
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

/**
 * có loại popup:
 * - popup với chỉ 1 nút đóng: info/warning/success
 * - popup với 2 nút đóng và đồng ý:
 * + popup xác nhận xoá/cập nhật
 * + popup xác nhận thoát
 * - popup với 3 nút (tính sau)
 *
 */
enum PopupTypeEnum {
  notification,
  confirmDelete,
  confirmExit
}

interface PopupOptions {
  type: PopupTypeEnum // loại popup
  title?: string
  content?: string

  callBackConfirmDelete?: (dataDelete: unknown) => void
  dataDelete?: unknown
  callBackCancelDelete?: () => void

  callBackConfirmExit?: () => void
  callBackCancelExit?: () => void
}

/**
 * 1. tạo đủ các biến data để truyền cho popup
 * 2. tạo hàm showPopup nhận vào options là tất cả các biến data cần cho popup
 * 3. trong hàm showPopup, gán các property từ options vào các biến data đã tạo ở b1
 */

//#region Chung
const visible = ref(true) // popup có được hiện lên khôngz

const type = ref<PopupTypeEnum>(PopupTypeEnum.notification)
const title = ref('')
const content = ref('')
const callBackConfirmDelete = ref<((dataDelete: unknown) => void) | undefined>()
const dataDelete = ref<unknown>()
const callBackCancelDelete = ref<(() => void) | undefined>()
const callBackConfirmExit = ref<(() => void) | undefined>()
const callBackCancelExit = ref<(() => void) | undefined>()

//#endregion

//#region Popup notification
function handleClose() {
  visible.value = false
}

function showPopup(options: PopupOptions = { type: PopupTypeEnum.notification }) {
  type.value = options.type
  options.title && (title.value = options.title)
  options.content && (content.value = options.content)

  callBackConfirmDelete.value = options.callBackConfirmDelete
  dataDelete.value = options.dataDelete
  callBackCancelDelete.value = options.callBackCancelDelete
  callBackConfirmExit.value = options.callBackConfirmExit
  callBackCancelExit.value = options.callBackCancelExit

  visible.value = true
}
//#endregion

//#region Popup confirm delete

function handleCancelDelete() {
  console.log('onCancelDelete')

  visible.value = false
}

function handleConfirmDelete() {
  console.log('onConfirmDelete')
}
//#endregion

//#region Popup exit
function handleCancelExit() {
  console.log('onCancelExit')
  visible.value = false
}

function handleConfirmExit() {
  console.log('onConfirmExit')
}

//#endregion
</script>

<style scoped></style>
