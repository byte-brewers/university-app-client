<script setup lang="ts">
import type { IAppComponent } from '@/types/interfeces/IAppCoponent'
import { computed } from 'vue'

/**
 * @description withDefaults > defineProps props.
 * @param {IAppComponent} props
 */
const props = withDefaults(defineProps<IAppComponent>(), {
  parentClassList: () => '',
  childClassList: () => '',
})

/**
 * @description Parent section class list.
 */
const parentClassList = computed(() => {
  return [`${props.parentClassList}`]
})

/**
 * @description Child div class list.
 */
const childClassList = computed(() => {
  return [`${props.childClassList}`]
})
</script>

<template>
  <section :class="['container', parentClassList]">
    <div :class="[childClassList]">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  @apply mx-auto h-full w-full px-4;
}
</style>
