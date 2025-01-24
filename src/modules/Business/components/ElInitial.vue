<script setup lang="ts">
import ElButton from '@/components/Controller/ElButton.vue';
import ElBanner from '@/components/Media/ElBanner.vue';
import StepPanel from 'primevue/steppanel';
import { INTRODUCTION_BANNER_ITEM } from '@/utils/mock/banner-items';
import { ref } from 'vue';

const getStartedCaption = ref<string | null>('GET STARTED QUIZ');
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="1">
    <div class="stepper">
      <div class="stepper__content">
        <ElBanner v-bind="INTRODUCTION_BANNER_ITEM">
          <template #button>
            <ElButton
              :button-action="() => activateCallback('2')"
              :variant="'default'"
            >
              {{ getStartedCaption }}
            </ElButton>
          </template>
        </ElBanner>
      </div>
    </div>
  </StepPanel>
</template>

<style scoped lang="scss">
.stepper {
  @apply flex flex-col;

  &__content {
    @apply border-2 border-dashed rounded border-[#e2e8f0];
    @apply flex items-center justify-center flex-auto;
    @apply bg-[#f8fafc];
    @apply font-medium;
    @apply min-h-[38.8rem];
  }
}
</style>
