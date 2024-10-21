<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
</script>

<template>
  <section class="registration">
    Registration form >> go to >>
    <RouterLink :to="{ name: EAuthorizationRoutesName.AUTHORIZATION }"
      >Authorization</RouterLink
    >
  </section>
</template>

<style scoped lang="scss">
.registration {
  @apply h-full flex flex-col items-center justify-center;
}
</style>
