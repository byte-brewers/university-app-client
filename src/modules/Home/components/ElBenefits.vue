<script setup lang="ts">
import type { IBenefit } from '../models/IBenefit';
import { withDefaults, defineProps } from 'vue';
import ElBanner from '@/components/Media/ElBanner.vue';

const props = withDefaults(defineProps<IBenefit>(), {
  benefitItems: () => [],
});
</script>

<template>
  <section class="benefits">
    <section class="benefits__container">
      <div
        v-for="item in props.benefitItems"
        :key="item.id"
        class="benefits__panel"
      >
        <div class="benefits__element">
          <h4 class="benefits__title">{{ item.title }}</h4>
          <p class="benefits__text">{{ item.text }}</p>
        </div>
        <ElBanner
          :is-button="false"
          :picture="item.picture"
          :alt="item.title"
          variant="ratio"
        />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
.benefits {
  @apply grid grid-cols-1 gap-4;

  &__ {
    &caption {
      @apply text-2xl font-bold;
    }

    &container {
      @apply grid-cols-1 md:grid-cols-3 lg:grid-cols-3;
      @apply grid gap-4;
    }

    &panel {
      @apply grid grid-cols-1 gap-4;
      @apply bg-gray-200 shadow-md;
      @apply rounded-lg;
      @apply relative;
    }

    &element {
      @apply flex flex-col justify-center items-center;
      @apply absolute top-0 left-0 w-full h-full;
      @apply z-20;
    }

    &title {
      @apply text-lg font-thin text-[#333];
    }

    &text {
      @apply text-3xl font-bold text-[#333];
    }
  }
}
</style>
