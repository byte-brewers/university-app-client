<script setup lang="ts">
import type { IBanner } from '@/models/Media/IBanner'
import { withDefaults, defineProps, computed } from 'vue'

/**
 * @description withDefaults > defineProps props.
 * @param {IAppComponent} props
 */
const props = withDefaults(defineProps<IBanner>(), {
  variant: () => 'default',
  title: () => '',
  text: () => '',
  picture: () => '',
  alt: () => '',
})

/**
 * @description Parent section class list.
 */
const variantStyle = computed(() => {
  return [`el-banner--${props.variant}`]
})
</script>

<template>
  <section :class="['el-banner', variantStyle]">
    <h1 v-if="title" class="el-banner__caption">{{ title }}</h1>
    <h4 v-if="text" class="el-banner__text">{{ text }}</h4>
    <picture class="el-banner__picture">
      <img :src="picture" :alt="alt" />
    </picture>
  </section>
</template>

<style scoped lang="scss">
.el-banner {
  @apply flex flex-col items-center justify-center overflow-hidden;
  @apply relative;

  &__ {
    &caption {
      @apply text-7xl text-center font-bold z-10 mt-16;
    }
    &text {
      @apply text-3xl text-center font-bold z-10 mt-8;
    }
    &picture {
      @apply h-full w-full;
      @apply top-0 left-0;
      @apply absolute;

      img {
        @apply h-full w-full object-cover;
        @apply blur-[3px];
      }
    }
  }

  &-- {
    &default {
      @apply h-96 w-full;
    }

    &ratio {
      @apply aspect-video;
    }

    &full {
      @apply h-dvh w-full;
    }
  }
}
</style>
