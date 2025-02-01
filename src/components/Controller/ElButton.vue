<script setup lang="ts">
import type { IButton } from '@/models/Controller/IButton';
import { computed, defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<IButton>(), {
  buttonAction: () => null,
  variant: 'default',
  type: 'button',
});

const variantStyle = computed(() => {
  return `el-button--${props.variant}`;
});
</script>

<template>
  <button
    :class="['el-button', variantStyle]"
    :type="props.type"
    @click="props.buttonAction"
  >
    <span class="el-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
.el-button {
  @apply flex items-center justify-center;
  @apply transition-all duration-300;
  @apply z-10 hover:shadow-lg;
  @apply focus:outline-none;

  &--default {
    @apply text-[#333333] hover:text-[#333333];
    @apply bg-[#ffffff] hover:bg-[#f0f0f0];
    @apply border-2 border-[#333333];
    @apply px-6 h-11;
  }

  &--primary {
    @apply text-[#ffffff];
    @apply bg-[#333333];
    @apply px-6 h-11;
  }

  &--secondary {
    @apply bg-[#1890ff];
    @apply text-black;
  }

  &--success {
    @apply bg-[#52c41a];
    @apply text-black;
  }

  &--warning {
    @apply bg-[#faad14];
    @apply text-black;
  }

  &--danger {
    @apply bg-[#f5222d];
    @apply text-black;
  }

  &__text {
    @apply text-lg font-bold;
  }

  &:disabled {
    @apply bg-[#f0f0f0] text-[#bfbfbf];
    @apply cursor-not-allowed;
  }
}
</style>
