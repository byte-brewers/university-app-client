<script setup lang="ts">
import ElButton from '@/components/Controller/ElButton.vue';
import StepPanel from 'primevue/steppanel';
import Fieldset from 'primevue/fieldset';
import { useBusiness } from '../composable/useBusiness';
import { useBusinessStore } from '@/stores/business';
import { computed, onMounted, ref } from 'vue';

const { setStepValueHandler } = useBusiness();
const businessStore = useBusinessStore();

const backCaption = ref<string>('Back');

const getBusinessPlan = computed(() => {
  return businessStore.openAiData?.business_plan;
});

onMounted(() => {
  console.log(getBusinessPlan.value);
});
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="3">
    <div class="stepper__wrapper">
      <div class="stepper__content">
        <div class="stepper__answers">
          <Fieldset
            v-for="(item, index) in getBusinessPlan"
            :key="item.step"
            :legend="`Step ${item.step}. ${item.title}`"
            :class="
              index === getBusinessPlan.length - 1
                ? 'stepper__answers-single'
                : 'stepper__answers-double'
            "
          >
            <p>1: {{ item.what_i_have_to_do }} 2: {{ item.where_to_start }}</p>
          </Fieldset>
        </div>
      </div>
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
    // @apply grid grid-cols-2 gap-4;
    @apply flex flex-col gap-4;
    @apply bg-[#f8fafc] p-4;
    @apply min-h-[38.8rem];
    @apply font-medium;
  }

  &__answers {
    @apply grid grid-cols-2 grid-rows-4 gap-4;
    @apply text-justify;
    @apply w-full;

    &-double {
      @apply col-span-1 row-span-1;
    }

    &-single {
      @apply col-span-2 row-span-1;
      @apply h-max;
    }
  }

  &__actions {
    @apply flex pt-6;

    &-start {
      @apply justify-start;
    }
  }
}
</style>
