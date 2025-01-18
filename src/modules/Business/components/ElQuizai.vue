<script setup lang="ts">
import ElButton from '@/components/Controller/ElButton.vue';
import ElInput from '@/components/Controller/ElInput.vue';
import ElBanner from '@/components/Media/ElBanner.vue';
import StepPanel from 'primevue/steppanel';
import { QUIZ_BANNER_ITEM } from '@/utils/mock/banner-items';
import { useBusiness } from '../composable/useBusiness';

const { nextCaption, backCaption, formData } = useBusiness();
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="2">
    <div class="stepper">
      <div class="stepper__content">
        <ElBanner v-bind="QUIZ_BANNER_ITEM" />
        <section class="stepper__content-col-2">
          <ElInput
            label="What product or service do you plan to offer?"
            placeholder="For example: food delivery, electronics sales, or consulting."
            type="text"
            v-model="formData.typeOfService"
          />
          <ElInput
            label="Who is your target audience?"
            placeholder="For example: young professionals, families with children, small business owners."
            type="text"
            v-model="formData.targetAudience"
          />
          <ElInput
            label="What region or city do you plan to work in?"
            placeholder="For example: Ukraine, online platform for the whole of Ukraine."
            type="text"
            v-model="formData.targetAudience"
          />
          <ElInput
            label="What kind of start-up capital do you plan to invest?"
            placeholder="Enter the amount in dollars (e.g. 500,000)."
            type="text"
            v-model="formData.startUpCapital"
          />
          <ElInput
            label="What sales channels do you plan to utilize?"
            placeholder="For example: online store, social media, offline store."
            type="text"
            v-model="formData.salesСhannels"
          />
          <ElInput
            label="What are the key costs you are planning for?"
            placeholder="For example, renting an office, purchasing goods, advertising."
            type="text"
            v-model="formData.keyCosts"
          />
        </section>
        <section class="stepper__content-col-1">
          <ElInput
            label="What are your main goals for your first year?"
            placeholder="For example: attract 100 customers, increase sales by 30%, enter a new market."
            type="textarea"
            v-model="formData.typeOfService"
          />
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
      <ElButton
        :button-action="() => activateCallback('3')"
        :variant="'primary'"
      >
        {{ nextCaption }}
      </ElButton>
    </div>
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
