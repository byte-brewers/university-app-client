<script setup lang="ts">
import {
  HOME_MAIN_BANNER_ITEM,
  HOME_DEAL_BANNER_ITEM,
} from '@/utils/mock/banner-items'
import { BENEFIT_ITEMS } from '@/utils/mock/benefit-items'
import AppContainer from '@/views/AppContainer.vue'
import ElBanner from '@/components/Media/ElBanner.vue'
import ElBenefits from '../components/ElBenefits.vue'
</script>

<template>
  <AppContainer child-class-list="grid grid-cols-1 gap-4 pb-11">
    <template #content>
      <section class="home">
        <section class="">
          <ElBanner
            :title="HOME_MAIN_BANNER_ITEM.title"
            :text="HOME_MAIN_BANNER_ITEM.text"
            :picture="HOME_MAIN_BANNER_ITEM.picture"
            :alt="HOME_MAIN_BANNER_ITEM.alt"
            :variant="HOME_MAIN_BANNER_ITEM.variant"
          />
        </section>

        <section class="home__element">
          <ElBenefits :benefit-items="BENEFIT_ITEMS" />
        </section>

        <section class="home__element">
          <ElBanner
            :title="HOME_DEAL_BANNER_ITEM.title"
            :text="HOME_DEAL_BANNER_ITEM.text"
            :picture="HOME_DEAL_BANNER_ITEM.picture"
            :alt="HOME_DEAL_BANNER_ITEM.alt"
          />
        </section>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.home {
  @apply grid grid-cols-1 gap-4;
  @apply h-full w-full;

  &__ {
    &element {
      @apply px-4;
    }
  }
}
</style>
