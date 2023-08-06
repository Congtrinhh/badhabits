<template>
  <a-config-provider
    :theme="{
      token: {
        borderRadius: 10,
        controlHeight: 36
      }
    }"
  >
    <a-button v-bind="props">
      <template #icon>
        <slot name="icon"></slot>
      </template>
      <template #default>
        <slot></slot>
      </template>
    </a-button>
  </a-config-provider>
</template>

<script lang="ts" setup>
import { type ButtonProps } from 'ant-design-vue'

const props = withDefaults(defineProps<ButtonProps>(), {})
</script>

<style lang="scss" scoped>
.ant-btn-default {
}

.ant-btn-primary {
  display: inline-block;
  font-size: 24px;
  padding: 0 15px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  -webkit-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;
}

.ant-btn-ghost {
  display: block;
  font-size: 14px;
  padding: 3px 15px;
  transition: none;
  position: relative;
  z-index: 1;
  border: 3px solid #000;
  border-radius: 6px;
  background: #fff;
  &:hover {
    background: #000;
    color: #fff;
  }
}
</style>
