<script setup lang="ts">
import { FAQ_ITEMS } from '@/utils/mock/faq-items';
import Panel from 'primevue/panel';
import Divider from 'primevue/divider';
</script>

<template>
  <div class="el-faq">
    <div class="el-faq__header">
      <div class="el-faq__caption">FAQs</div>
      <div class="el-faq__text">
        If you need help, we have a list of frequently asked questions and
        answers. We strive to give you the best buying experience possible.
        Click a question below to view the answer.
      </div>
    </div>

    <Divider />

    <masonry-wall
      :items="FAQ_ITEMS"
      :column-width="300"
      :ssr-columns="1"
      :gap="16"
    >
      <template #default="{ item }">
        <Panel :header="item.title">
          <div>{{ item.text }}</div>
        </Panel>
      </template>
    </masonry-wall>

    <Divider />
  </div>
</template>

<style scoped lang="scss">
.el-faq {
  @apply w-full flex flex-col gap-8 justify-center;
  @apply px-2 mt-10;

  &__header {
    @apply flex flex-col gap-4 justify-center;
  }

  &__caption {
    @apply text-center text-5xl font-bold;
  }

  &__text {
    @apply text-center text-base font-thin;
  }
}
</style>
