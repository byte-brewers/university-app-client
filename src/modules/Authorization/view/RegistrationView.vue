<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
import ElHorizontalLine from '../components/ElHorizontalLine.vue'
import AppContainer from '@/views/AppContainer.vue'
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
            <div>Email</div>
            <div>Password</div>
            <div>Password</div>
            <div>Submit</div>
          </section>
          <RouterLink :to="{ name: EAuthorizationRoutesName.AUTHORIZATION }"
            >Authorization</RouterLink
          >
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
      @apply text-3xl font-bold uppercase text-[#333];
    }

    &form {
      @apply border-[1px] border-t-8 border-[#262626] border-solid;
      @apply bg-white shadow-md;
      @apply w-full;
      @apply p-4;
    }
  }
}
</style>
