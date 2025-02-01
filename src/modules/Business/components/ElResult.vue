<script setup lang="ts">
import ElButton from '@/components/Controller/ElButton.vue';
import ElLoader from '@/components/ElLoader.vue';
import StepPanel from 'primevue/steppanel';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import { useBusiness } from '../composable/useBusiness';
import { useBusinessStore } from '@/stores/business';
import { computed, ref } from 'vue';

const { setStepValueHandler } = useBusiness();
const businessStore = useBusinessStore();

const downloadCaption = ref<string>('PRINT');
const backCaption = ref<string>('BACK');

const printArticleHandler = () => {
  // const printArea = document.getElementById('print-area');
  // const body = document.body;

  // if (printArea) body.appendChild(printArea);

  window.print();
};

const getBusinessOtherPlan = computed(() => {
  return businessStore.openAiData?.others
    ? Object.keys(businessStore.openAiData?.others).map((key) => {
        return {
          title: businessStore.openAiData?.others[key].title,
          text: businessStore.openAiData?.others[key].text,
        };
      })
    : [];
});

const getBusinessmainPlan = computed(() => {
  return businessStore.openAiData?.business_plan || [];
});
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="3">
    <div class="stepper__wrapper" id="print-area">
      <div class="stepper__content">
        <ElLoader v-if="businessStore.isLoaded" />
        <div class="grid gap-4" v-else>
          <div>
            <div class="caption">Strengthening foundations</div>
            <div class="stepper__answers">
              <Fieldset
                v-for="(item, index) in getBusinessmainPlan"
                :key="item.step"
                :legend="`Step ${item.step}. ${item.title}`"
                :class="
                  index === getBusinessmainPlan.length - 1
                    ? 'stepper__answers-single'
                    : 'stepper__answers-double'
                "
              >
                <div class="stepper__answers-content">
                  <b>1:</b> {{ item.what_i_have_to_do }} <b>2:</b>
                  {{ item.where_to_start }}
                </div>
              </Fieldset>
            </div>
          </div>
          <div>
            <div class="caption">My recommendation</div>
            <div class="stepper__others">
              <masonry-wall
                :items="getBusinessOtherPlan"
                :column-width="250"
                :ssr-columns="1"
                :gap="16"
              >
                <template #default="{ item }">
                  <Panel :header="item.title">
                    <div>{{ item.text }}</div>
                  </Panel>
                </template>
              </masonry-wall>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stepper__actions stepper__actions-between">
      <ElButton
        :button-action="
          () => setStepValueHandler({ activateCallback, value: '2' })
        "
        :variant="'default'"
      >
        {{ backCaption }}
      </ElButton>
      <ElButton
        :button-action="printArticleHandler"
        :variant="'primary'"
        :disabled="businessStore.isLoaded"
      >
        {{ downloadCaption }}
      </ElButton>
    </div>
  </StepPanel>
</template>

<style scoped lang="scss">
.stepper {
  @apply flex flex-col;

  &__content {
    @apply border-2 border-dashed rounded border-[#e2e8f0];
    @apply flex flex-col gap-4 justify-center;
    @apply bg-[#f8fafc] p-4;
    @apply min-h-[38.8rem] h-full;
    @apply font-medium;
  }

  &__answers {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-4;
    @apply text-justify;
    @apply w-full;

    &-content {
      @apply text-sm text-gray-600;

      b {
        @apply text-base;
      }
    }

    &-double {
      @apply lg:col-span-1;
    }

    &-single {
      @apply lg:col-span-2;
    }
  }

  &__actions {
    @apply flex pt-6;

    &-between {
      @apply justify-between;
    }
  }
}

:deep(.p-fieldset) {
  @apply bg-white p-4 border-2;

  .p-fieldset-legend {
    @apply shadow-lg;

    .p-fieldset-legend-label {
      @apply text-base text-gray-600;
    }
  }
}

:deep(.p-panel) {
  @apply bg-white p-0 border-2;

  .p-panel-content {
    @apply text-sm text-gray-600;
    @apply text-justify;
  }
}

.caption {
  @apply text-3xl font-bold text-center;
  @apply uppercase mb-4;
}
</style>
