<script setup lang="ts">
import AppContainer from '@/views/AppContainer.vue'
</script>

<template>
  <AppContainer
    parent-class-list="h-full w-full"
    child-class-list="h-full w-full"
  >
    <RouterView />
  </AppContainer>
</template>
