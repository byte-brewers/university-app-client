<script setup lang="ts">
import type { IRouter } from '@/models/Controller/IRouter';
import { defineProps, withDefaults } from 'vue';
import { RouterLink } from 'vue-router';

const props = withDefaults(defineProps<IRouter>(), {
  routerList: () => [],
});
</script>

<template>
  <RouterLink
    v-for="item in props.routerList"
    :key="item.id"
    :to="item.road"
    class="el-route__link"
  >
    {{ item.text }}
  </RouterLink>
</template>

<style scoped lang="scss">
.el-route {
  &__link {
    @apply text-white hover:text-gray-300;
    @apply transition-colors duration-300;
  }
}
</style>
