<script setup lang="ts">
import type { IBanner } from '@/models/Media/IBanner';
import { withDefaults, defineProps, computed } from 'vue';
import ElButton from '../Controller/ElButton.vue';
import router from '@/router';

/**
 * @description withDefaults > defineProps props.
 * @param {IAppComponent} props
 */
const props = withDefaults(defineProps<IBanner>(), {
  bannerTitle: () => '',
  bannerText: () => '',
  buttonText: () => '',
  buttonGoto: () => '',
  isButton: () => true,
  picture: () => '',
  variant: () => 'default',
});

/**
 * @description Redirect to the route.
 */
const redirectTo = () => {
  router.push({ name: props.buttonGoto });
};

/**
 * @description Parent section class list.
 */
const variantStyle = computed(() => {
  return [`el-banner--${props.variant}`];
});
</script>

<template>
  <section :class="['el-banner', variantStyle]">
    <div class="el-banner__mask"></div>
    <h1 v-if="bannerTitle" class="el-banner__caption">{{ bannerTitle }}</h1>
    <h4 v-if="bannerText" class="el-banner__text">{{ bannerText }}</h4>
    <ElButton
      v-if="isButton"
      class="el-banner__button"
      variant="default"
      :button-action="redirectTo"
      >{{ buttonText }}</ElButton
    >
    <picture class="el-banner__picture">
      <img :src="picture" :alt="picture" />
    </picture>
  </section>
</template>

<style scoped lang="scss">
.el-banner {
  @apply flex flex-col items-center gap-4 justify-center overflow-hidden;
  @apply relative;

  &__ {
    &caption {
      @apply text-7xl text-center font-bold z-10;
      @apply text-black;
    }

    &text {
      @apply text-3xl text-center font-thin z-10;
      @apply text-black;
    }

    &button {
      @apply mt-4;
    }

    &picture {
      @apply h-full w-full;
      @apply top-0 left-0;
      @apply absolute;

      img {
        @apply h-full w-full object-cover;
        @apply blur-[4px];
      }
    }

    &mask {
      @apply h-full w-full bg-white bg-opacity-50;
      @apply absolute top-0 left-0 z-10;
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
