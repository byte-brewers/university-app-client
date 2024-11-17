<script setup lang="ts">
import {
  HOME_MAIN_BANNER_ITEM,
  HOME_DEAL_BANNER_ITEM,
} from '@/utils/mock/banner-items';
import { BENEFIT_ITEMS } from '@/utils/mock/benefit-items';
import AppContainer from '@/views/AppContainer.vue';
import ElBanner from '@/components/Media/ElBanner.vue';
import ElBenefits from '../components/ElBenefits.vue';
</script>

<template>
  <AppContainer child-class-list="grid grid-cols-1 gap-4 pb-14">
    <template #content>
      <section class="home">
        <section class="home__element-none">
          <ElBanner v-bind="HOME_MAIN_BANNER_ITEM" />
        </section>

        <section class="home__element">
          <ElBenefits :benefit-items="BENEFIT_ITEMS" />
        </section>

        <section class="home__element">
          <ElBanner v-bind="HOME_DEAL_BANNER_ITEM" />
        </section>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.home {
  @apply grid grid-cols-1 gap-4;
  @apply h-full w-full;

  &__element {
    @apply px-4;
  }
}
</style>
