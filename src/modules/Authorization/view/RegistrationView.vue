<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
import AppContainer from '@/views/AppContainer.vue'
</script>

<template>
  <AppContainer parent-class-list="registration">
    <div>
      Registration form >> go to >>
      <RouterLink :to="{ name: EAuthorizationRoutesName.AUTHORIZATION }"
        >Authorization</RouterLink
      >
    </div>
  </AppContainer>
</template>

<style scoped lang="scss">
.registration {
  @apply flex flex-col items-center justify-center;
}
</style>
