<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections';
import { ref } from 'vue';
import ElHorizontalLine from '../components/ElHorizontalLine.vue';
import AppContainer from '@/views/AppContainer.vue';
import ElInput from '@/components/Controller/ElInput.vue';
import ElButton from '@/components/Controller/ElButton.vue';

const formData = ref<{
  email: string;
  pass1: string;
  pass2: string;
}>({
  email: '',
  pass1: '',
  pass2: '',
});

const signUp = () => {
  console.log('Sign Up', formData.value);
};
</script>

<template>
  <AppContainer
    parent-class-list="h-full w-full"
    child-class-list="h-full w-full"
  >
    <template #content>
      <section class="registration">
        <section class="registration__container">
          <h1 class="registration__caption">SIGN UP</h1>
          <section class="registration__form">
            <ElInput
              label="Your email address"
              placeholder="Your email address"
              type="text"
              v-model="formData.email"
            />

            <ElInput
              label="Create password"
              placeholder="Create password"
              type="password"
              v-model="formData.pass1"
            />

            <ElInput
              placeholder="Repeat password"
              label="Repeat Password"
              type="password"
              v-model="formData.pass2"
            />

            <ElButton :button-action="signUp" variant="primary"
              >Sign Up</ElButton
            >
          </section>

          <h3 class="registration__footer">
            If you do not have an account, please
            <RouterLink
              :to="{ name: EAuthorizationRoutesName.AUTHORIZATION }"
              class="registration__footer-action"
              >autorize</RouterLink
            >
          </h3>

          <ElHorizontalLine />
        </section>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.registration {
  @apply h-full flex flex-col items-center justify-center;
  @apply bg-white overflow-hidden;

  &__ {
    &container {
      @apply flex flex-col gap-4 w-full md:w-[770px];
      @apply px-4 relative;
    }

    &caption {
      @apply text-3xl font-bold uppercase text-[#333333];
    }

    &form {
      @apply border-[1px] border-t-8 border-[#262626];
      @apply bg-white shadow-md;
      @apply w-full flex flex-col gap-4;
      @apply p-4;
    }

    &footer {
      @apply text-[#333333] text-sm text-center;

      &-action {
        @apply text-[#262626] font-bold;
      }
    }
  }
}
</style>
