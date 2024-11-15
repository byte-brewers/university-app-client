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
      <section class="authorization">
        <section class="authorization__container">
          <h1 class="authorization__caption">SIGN IN</h1>
          <section class="authorization__form">
            <div>Email</div>
            <div>Password</div>
            <div>Submit</div>
          </section>
          <RouterLink :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
            >Registration</RouterLink
          >
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
