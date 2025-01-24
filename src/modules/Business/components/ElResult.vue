<script setup lang="ts">
import ElButton from '@/components/Controller/ElButton.vue';
import StepPanel from 'primevue/steppanel';
import { useBusiness } from '../composable/useBusiness';
import { useBusinessStore } from '@/stores/business';
import { ref } from 'vue';

const { setStepValueHandler } = useBusiness();
const businessStore = useBusinessStore();

const backCaption = ref<string>('Back');
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="3">
    <div class="stepper__wrapper">
      <div class="stepper__content">{{ businessStore.openAiData }}</div>
    </div>
    <div class="stepper__actions stepper__actions-start">
      <ElButton
        :button-action="
          () => setStepValueHandler({ activateCallback, value: '2' })
        "
        :variant="'default'"
      >
        {{ backCaption }}
      </ElButton>
    </div>
  </StepPanel>
</template>

<style scoped lang="scss">
.stepper {
  @apply flex flex-col;

  &__content {
    @apply border-2 border-dashed rounded border-[#e2e8f0];
    @apply flex items-center justify-center flex-auto;
    @apply bg-[#f8fafc] p-4;
    @apply font-medium;
    @apply min-h-[38.8rem];
  }

  &__actions {
    @apply flex pt-6;

    &-start {
      @apply justify-start;
    }
  }
}
</style>
