<script setup lang="ts">
import type { IAuthFormData } from '../models/IFormData';

import ElHorizontalLine from '../components/ElHorizontalLine.vue';
import AppContainer from '@/views/AppContainer.vue';
import ElInput from '@/components/Controller/ElInput.vue';
import ElButton from '@/components/Controller/ElButton.vue';

import { EAuthorizationRoutesName } from '@/router/collections';
import { useAuthorization } from '../composable/useAuthorization';
import { Form, useForm } from 'vee-validate';
import { ref } from 'vue';

const { formData, fields, schema, fetchOpenAi } = useAuthorization();
const { validate } = useForm();

const textHeader = ref<string | null>('SIGN IN');
const textButton = ref<string | null>('SIGN IN');

const validation = async (value: IAuthFormData) => {
  const isValid = await validate();

  if (isValid) fetchOpenAi(value);
};
</script>

<template>
  <AppContainer
    parent-class-list="h-full w-full"
    child-class-list="h-full w-full"
  >
    <template #content>
      <section class="authorization">
        <Form
          ref="form"
          :validation-schema="schema"
          :initial-values="formData"
          @submit="(value: any) => validation(value)"
        >
          <section class="authorization__container">
            <h1 class="authorization__caption">{{ textHeader }}</h1>
            <section class="authorization__form">
              <ElInput v-bind="fields.email" />
              <ElInput v-bind="fields.pass" />
              <ElButton variant="primary" type="submit">{{
                textButton
              }}</ElButton>
            </section>

            <h3 class="authorization__footer">
              If you do not have an account, please
              <RouterLink
                :to="{ name: EAuthorizationRoutesName.REGISTRATION }"
                class="authorization__footer-action"
                >register</RouterLink
              >
            </h3>

            <ElHorizontalLine />
          </section>
        </Form>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.authorization {
  @apply flex flex-col items-center justify-center;
  @apply bg-white overflow-hidden;
  @apply h-[calc(100vh-6rem)];

  &__ {
    &container {
      @apply flex flex-col gap-4 w-full md:w-[770px];
      @apply px-4 relative;
    }

    &caption {
      @apply text-3xl font-bold uppercase text-[#333333];
    }

    &form {
      @apply border-[1px] border-t-8 border-[#262626];
      @apply bg-white shadow-md;
      @apply w-full flex flex-col gap-4;
      @apply p-4;
    }

    &footer {
      @apply text-[#333333] text-sm text-center;

      &-action {
        @apply text-[#262626] font-bold;
      }
    }
  }
}
</style>
