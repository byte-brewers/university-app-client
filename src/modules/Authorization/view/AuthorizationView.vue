<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections';
import { ref } from 'vue';
import ElHorizontalLine from '../components/ElHorizontalLine.vue';
import AppContainer from '@/views/AppContainer.vue';
import ElInput from '@/components/Controller/ElInput.vue';
import ElButton from '@/components/Controller/ElButton.vue';

const formData = ref<{
  email: string;
  pass: string;
}>({
  email: '',
  pass: '',
});

const signIn = () => {
  console.log('Sign In', formData.value);
};
</script>

<template>
  <AppContainer
    parent-class-list="h-full w-full"
    child-class-list="h-full w-full"
  >
    <template #content>
      <section class="authorization">
        <section class="authorization__container">
          <h1 class="authorization__caption">SIGN IN</h1>
          <section class="authorization__form">
            <ElInput
              label="Your email address"
              placeholder="Your email address"
              type="text"
              v-model="formData.email"
            />

            <ElInput
              label="Password"
              placeholder="Password"
              type="password"
              v-model="formData.pass"
            />

            <ElButton :button-action="signIn" variant="primary"
              >Sign In</ElButton
            >
          </section>

          <h3 class="authorization__footer">
            If you do not have an account, please
            <RouterLink
              :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
              class="authorization__footer-action"
              >register</RouterLink
            >
          </h3>
          <ElHorizontalLine />
        </section>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.authorization {
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
