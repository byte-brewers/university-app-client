<template>
  <div class="el-input">
    <label :for="label">{{ label }}</label>
    <input :value="modelValue" @input="updateValue" :id="label" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
  }>(),
  {
    modelValue: '',
    label: 'Default Label',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event): void => {
  const { value } = event.target as HTMLInputElement;

  emit('update:modelValue', value);
};
</script>

<style scoped>
.el-input {
  @apply flex flex-col gap-1 w-full max-w-full;

  label {
    @apply text-[#333333] text-sm font-bold;
  }

  input {
    @apply border-[1px] border-[#333333];
    @apply px-2 py-1;

    &::placeholder {
      @apply text-[#333333] text-sm;
    }
  }
}
</style>
