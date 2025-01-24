<script setup lang="ts">
import type { TFormData } from '../models/TFormData';

import ElButton from '@/components/Controller/ElButton.vue';
import ElInput from '@/components/Controller/ElInput.vue';
import ElBanner from '@/components/Media/ElBanner.vue';
import StepPanel from 'primevue/steppanel';

import { QUIZ_BANNER_ITEM } from '@/utils/mock/banner-items';
import { useBusiness } from '../composable/useBusiness';
import { Form, useForm } from 'vee-validate';
import { ref } from 'vue';

const { formData, fields, schema, fetchOpenAi } = useBusiness();
const { validate } = useForm();

const nextCaption = ref<string | null>('Next');
const backCaption = ref<string | null>('Back');

const validation = async ({
  activateCallback,
  value,
}: {
  activateCallback: (value: string) => void;
  value: TFormData;
}) => {
  const isValid = await validate();

  if (isValid) {
    // activateCallback('3');
    fetchOpenAi(value);
  }
};
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="2">
    <Form
      ref="form"
      :validation-schema="schema"
      :initial-values="formData"
      @submit="(value: any) => validation({ activateCallback, value })"
    >
      <div class="stepper">
        <div class="stepper__content">
          <ElBanner v-bind="QUIZ_BANNER_ITEM" />
          <section class="stepper__content-col-2">
            <ElInput v-bind="fields.productOrService" />
            <ElInput v-bind="fields.targetAudience" />
            <ElInput v-bind="fields.regionOrCity" />
            <ElInput v-bind="fields.startUpCapital" />
            <ElInput v-bind="fields.salesChannels" />
            <ElInput v-bind="fields.keyCosts" />
          </section>
          <section class="stepper__content-col-1">
            <ElInput v-bind="fields.mainGoals" />
          </section>
        </div>
      </div>
      <div class="stepper__actions stepper__actions-between">
        <ElButton
          :button-action="() => activateCallback('1')"
          :variant="'default'"
        >
          {{ backCaption }}
        </ElButton>
        <ElButton :variant="'primary'" :type="'submit'">
          {{ nextCaption }}
        </ElButton>
      </div>
    </Form>
  </StepPanel>
</template>

<style scoped lang="scss">
.stepper {
  @apply flex flex-col;

  &__content {
    @apply border-2 border-dashed rounded border-[#e2e8f0];
    @apply flex flex-col gap-4;
    @apply bg-[#f8fafc] p-4;
    @apply min-h-[38.8rem];
    @apply font-medium;

    &-col-1 {
      @apply grid gap-4 grid-cols-1;
    }

    &-col-2 {
      @apply grid gap-4 grid-cols-3;
    }
  }

  &__actions {
    @apply flex pt-6;

    &-between {
      @apply justify-between;
    }
  }
}
</style>
