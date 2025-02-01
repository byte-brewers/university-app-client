<script setup lang="ts">
import type { IBanner } from '@/models/Media/IBanner';
import { withDefaults, defineProps, computed } from 'vue';
import ElButton from '../Controller/ElButton.vue';
import router from '@/router';

const props = withDefaults(defineProps<IBanner>(), {
  bannerTitle: '',
  bannerText: '',
  bannerDesc: '',
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
    <slot name="caption">
      <h1 v-if="props.bannerTitle" class="el-banner__caption">
        {{ props.bannerTitle }}
      </h1>
      <h4 v-if="props.bannerText" class="el-banner__text">
        {{ props.bannerText }}
      </h4>
      <p
        v-if="props.bannerDesc"
        class="el-banner__desc"
        v-html="props.bannerDesc"
      ></p>
    </slot>

    <slot name="button">
      <ElButton
        v-if="props.isButton"
        :button-action="redirectTo"
        :class="'el-banner__button'"
        :variant="'default'"
      >
        {{ props.buttonText }}
      </ElButton>
    </slot>
    <picture class="el-banner__picture">
      <img :src="props.picture" :alt="props.bannerTitle" />
    </picture>
  </section>
</template>

<style scoped lang="scss">
.el-banner {
  @apply flex flex-col items-center gap-4 justify-center overflow-hidden;
  @apply relative px-4;

  &__caption {
    @apply text-3xl lg:text-7xl text-center font-bold z-10;
    @apply text-black;
  }

  &__text {
    @apply text-xl lg:text-3xl text-center font-thin z-10;
    @apply text-black;
  }

  &__desc {
    @apply text-base lg:text-xl text-center font-medium z-10;
    @apply text-black;
    @apply my-4;
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
      @apply blur-[1px];
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

  &--introduction {
    @apply h-[38.8rem] w-full;
  }

  &--quiz {
    @apply h-[300px] w-full;
  }

  &--full {
    @apply h-[calc(100vh-6rem)] w-full;
  }
}
</style>
