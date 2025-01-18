<script setup lang="ts">
import AppContainer from '@/views/AppContainer.vue';
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import Step from 'primevue/step';
import ElInitial from '../components/ElInitial.vue';
import ElQuizai from '../components/ElQuizai.vue';
import ElResult from '../components/ElResult.vue';

import { ref } from 'vue';

const stepList = ref([
  { id: 1, value: '1', label: 'Introduction' },
  { id: 2, value: '2', label: 'Quiz' },
  { id: 3, value: '3', label: 'Result' },
]);
</script>

<template>
  <AppContainer>
    <template #content>
      <section class="business">
        <Stepper value="1" class="business__content">
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
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.business {
  @apply flex flex-col gap-0 px-4;

  &__header {
    @apply pointer-events-none;
  }

  &__content {
    @apply mt-4;
  }
}
</style>
