<script setup lang="ts">
import type { IRouter } from '@/models/Controller/IRouter'
import { defineProps, withDefaults } from 'vue'
import { RouterLink } from 'vue-router'

withDefaults(defineProps<IRouter>(), {
  routerList: () => [],
})
</script>

<template>
  <RouterLink v-for="item in routerList" :key="item.id" :to="item.road">{{
    item.text
  }}</RouterLink>
</template>
