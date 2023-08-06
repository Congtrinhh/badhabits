<template>
  <a-config-provider :theme="userLayoutTheme">
    <div id="userPageLayout">
      <the-header></the-header>
      <router-view></router-view>
      <the-footer></the-footer>
    </div>
  </a-config-provider>
</template>

<script lang="ts" setup>
import TheHeader from '@/layouts/user/TheHeader.vue'
import TheFooter from '@/layouts/user/TheFooter.vue'

const userLayoutTheme = {
  token: {
    colorPrimary: '#000',
    fontFamily: "'Cousine', monospace"
  }
}
</script>

<style scoped></style>
