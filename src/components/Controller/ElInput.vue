<template>
  <div class="el-input">
    <label :for="label">{{ label }}</label>
    <input
      v-if="type === 'text' || type === 'password'"
      :placeholder="placeholder"
      :value="modelValue"
      :id="label"
      @input="updateValue"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :value="modelValue"
      :id="label"
      @input="updateValue"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

withDefaults(
  defineProps<{
    label: string;
    placeholder: string;
    modelValue: string;
    type: string;
  }>(),
  {
    label: 'Default Label',
    placeholder: '',
    modelValue: '',
    type: 'text',
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

  textarea,
  input {
    @apply border-[1px] border-[#333333];
    @apply px-2 py-1;

    &::placeholder {
      @apply text-[#333333] text-sm opacity-40;
    }
  }

  textarea {
    @apply h-[100px];
  }
}
</style>
