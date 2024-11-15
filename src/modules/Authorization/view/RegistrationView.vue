<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
import AppContainer from '@/views/AppContainer.vue'
</script>

<template>
  <AppContainer
    parent-class-list="h-full w-full"
    child-class-list="h-full w-full"
  >
    <template #content>
      <section class="registration">
        Registration form >> go to >>
        <RouterLink :to="{ name: EAuthorizationRoutesName.AUTHORIZATION }"
          >Authorization</RouterLink
        >
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.registration {
  @apply h-full flex flex-col items-center justify-center;
}
</style>
