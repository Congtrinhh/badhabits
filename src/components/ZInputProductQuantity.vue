<template>
  <div class="z-input-product-quantity-wrapper">
    <span @click="decrease" class="decrease-button">-</span>
    <input
      type="number"
      :value="props.data"
      @change="handleChange"
      ref="inputRef"
    />
    <span @click="increase" class="increase-button">+</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

interface IProp {
  data: number;
}

const props = defineProps<IProp>();

const emit = defineEmits(["increase", "decrease", "change"]);

const inputRef = ref(undefined);

function decrease() {
  emit("decrease");
}
function increase() {
  emit("increase");
}

function handleChange($event: any) {
  let value = Number($event.target.value);
  if (value < 0) {
    inputRef.value.value = 1;
    emit("change", 1);
    return;
  }
  emit("change", value);
}
</script>

<style lang="scss" scoped></style>
