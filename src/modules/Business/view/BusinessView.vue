<script setup lang="ts">
import AppContainer from '@/views/AppContainer.vue';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import Step from 'primevue/step';
import ElInitial from '../components/ElInitial.vue';
import ElQuizai from '../components/ElQuizai.vue';
import ElResult from '../components/ElResult.vue';
import ElFaq from '@/components/FAQ/ElFaq.vue';
import { useBusiness } from '../composable/useBusiness';
import { computed } from 'vue';

const { stepList, getStorageStepValue } = useBusiness();

const currentStep = computed(() => {
  return getStorageStepValue();
  // return '3';
});
</script>

<template>
  <AppContainer>
    <template #content>
      <section class="business">
        <Stepper :value="currentStep" class="business__content">
          <StepList>
            <Step
              v-for="item in stepList"
              :key="item.id"
              :value="item.value"
              class="business__header"
            >
              {{ item.label }}
            </Step>
          </StepList>
          <StepPanels>
            <ElInitial />

            <ElQuizai />

            <ElResult />
          </StepPanels>
        </Stepper>

        <ElFaq />
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.business {
  @apply max-w-[1440px] w-full mx-auto;
  @apply flex flex-col gap-0 px-2 pb-12;

  &__header {
    @apply pointer-events-none;
  }

  &__content {
    @apply mt-4;
  }
}
</style>
