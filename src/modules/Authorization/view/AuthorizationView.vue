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
      <section class="authorization">
        Authorization form >> go to >>
        <RouterLink :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
          >Registration</RouterLink
        >
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.authorization {
  @apply h-full flex flex-col items-center justify-center;
}
</style>
