<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { useField } from 'vee-validate';

const props = withDefaults(
  defineProps<{
    name: string;
    label: string;
    placeholder?: string;
    type: string;
  }>(),
  {
    label: 'Default Label',
    placeholder: '',
    type: 'text',
  },
);

const { value, errorMessage } = useField<string>(() => props.name);
</script>

<template>
  <div class="el-input">
    <label :for="label" class="el-input__label">{{ label }}</label>
    <input
      v-if="type === 'text' || type === 'password' || type === 'number'"
      :class="{ 'el-input__input el-input__input--error': errorMessage }"
      class="el-input__input"
      :type="type"
      :placeholder="placeholder"
      :id="label"
      v-model="value"
    />
    <textarea
      v-else
      :placeholder="placeholder"
      :class="{ 'el-input__input el-input__input--error': errorMessage }"
      class="el-input__textarea"
      :id="label"
      v-model="value"
    ></textarea>
    <p class="el-input__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.el-input {
  @apply flex flex-col gap-1 w-full max-w-full;
  @apply relative;

  &__label {
    @apply text-[#333333] text-sm font-bold;
  }

  &__textarea,
  &__input {
    @apply border-[1px] border-[#333333];
    @apply px-2 py-1;

    &--error {
      @apply border-red-700;
    }

    &::placeholder {
      @apply text-[#333333] text-sm opacity-40;
    }
  }

  &__textarea {
    @apply h-[100px];
  }

  &__error-message {
    @apply text-red-700 text-xs;
    @apply absolute -bottom-3.5;
  }
}
</style>
