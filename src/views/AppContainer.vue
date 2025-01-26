<script setup lang="ts">
import type { IAppComponent } from '@/models/IAppCoponent';
import { withDefaults, defineProps, computed } from 'vue';
import ElHeader from '@/components/Header/ElHeader.vue';
import ElFooter from '@/components/Footer/ElFooter.vue';

/**
 * @description withDefaults > defineProps props.
 * @param {IAppComponent} props
 */
const props = withDefaults(defineProps<IAppComponent>(), {
  parentClassList: () => '',
  childClassList: () => '',
  footer: () => true,
});

/**
 * @description Parent section class list.
 */
const parentClassList = computed(() => {
  return [`${props.parentClassList}`];
});

/**
 * @description Child div class list.
 */
const childClassList = computed(() => {
  return [`${props.childClassList}`];
});
</script>

<template>
  <section :class="[parentClassList]">
    <div :class="[childClassList]">
      <ElHeader />
      <slot name="content" />
      <ElFooter v-if="footer" />
    </div>
  </section>
</template>
