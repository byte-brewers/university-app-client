<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
</script>

<template>
  <section class="authorization">
    Authorization form >> go to >>
    <RouterLink :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
      >Registration</RouterLink
    >
  </section>
</template>

<style scoped lang="scss">
.authorization {
  @apply h-full flex flex-col items-center justify-center;
}
</style>
