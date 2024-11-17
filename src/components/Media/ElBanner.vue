<script setup lang="ts">
import type { IBanner } from '@/models/Media/IBanner';
import { withDefaults, defineProps, computed } from 'vue';
import ElButton from '../Controller/ElButton.vue';
import router from '@/router';

const props = withDefaults(defineProps<IBanner>(), {
  bannerTitle: '',
  bannerText: '',
  buttonText: '',
  buttonGoto: '',
  isButton: true,
  picture: '',
  variant: 'default',
});

const redirectTo = () => {
  if (props.buttonGoto) router.push({ name: props.buttonGoto });
};

const variantStyle = computed(() => {
  return `el-banner--${props.variant}`;
});
</script>

<template>
  <section :class="['el-banner', variantStyle]">
    <div class="el-banner__mask"></div>
    <h1 v-if="props.bannerTitle" class="el-banner__caption">
      {{ props.bannerTitle }}
    </h1>
    <h4 v-if="props.bannerText" class="el-banner__text">
      {{ props.bannerText }}
    </h4>
    <ElButton
      v-if="props.isButton"
      :button-action="redirectTo"
      :class="'el-banner__button'"
      :variant="'default'"
    >
      {{ props.buttonText }}
    </ElButton>
    <picture class="el-banner__picture">
      <img :src="props.picture" :alt="props.bannerTitle" />
    </picture>
  </section>
</template>

<style scoped lang="scss">
.el-banner {
  @apply flex flex-col items-center gap-4 justify-center overflow-hidden;
  @apply relative;

  &__caption {
    @apply text-7xl text-center font-bold z-10;
    @apply text-black;
  }

  &__text {
    @apply text-3xl text-center font-thin z-10;
    @apply text-black;
  }

  &__button {
    @apply mt-4;
  }

  &__picture {
    @apply h-full w-full;
    @apply top-0 left-0;
    @apply absolute;

    img {
      @apply h-full w-full object-cover;
      @apply blur-[4px];
    }
  }

  &__mask {
    @apply h-full w-full bg-white bg-opacity-50;
    @apply absolute top-0 left-0 z-10;
  }

  &--default {
    @apply h-96 w-full;
  }

  &--ratio {
    @apply aspect-video;
  }

  &--full {
    @apply h-dvh w-full;
  }
}
</style>
