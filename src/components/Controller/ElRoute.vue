<script setup lang="ts">
import type { IController } from '@/types/interfeces/Controller/IController'
import { defineProps, withDefaults } from 'vue'
import { RouterLink } from 'vue-router'

withDefaults(defineProps<IController>(), {
  routerList: () => [],
})
</script>

<template>
  <RouterLink v-for="item in routerList" :key="item.id" :to="item.road">{{
    item.text
  }}</RouterLink>
</template>
