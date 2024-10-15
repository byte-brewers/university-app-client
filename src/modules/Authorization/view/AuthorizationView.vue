<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
import AppContainer from '@/views/AppContainer.vue'
</script>

<template>
  <AppContainer parent-class-list="authorization">
    <div>
      Authorization form >> go to >>
      <RouterLink :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
        >Registration</RouterLink
      >
    </div>
  </AppContainer>
</template>

<style scoped lang="scss">
.authorization {
  @apply flex flex-col items-center justify-center;
}
</style>
