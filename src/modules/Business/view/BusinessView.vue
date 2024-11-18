<script setup lang="ts">
import AppContainer from '@/views/AppContainer.vue';
</script>

<template>
  <AppContainer>
    <template #content>
      <section class="business">
        <section class="business__navigation">
          <div class="business__navigation-content">
            <h1>Business</h1>
          </div>
        </section>

        <section class="business__content">
          <div>content</div>
        </section>
      </section>
    </template>
  </AppContainer>
</template>

<style scoped lang="scss">
.business {
  @apply flex flex-col gap-0 px-4;

  &__navigation {
    @apply pt-4 sticky top-0 bg-white;

    &-content {
      @apply border-[1px] border-t-8 border-[#262626];
      @apply p-4 shadow-lg;
    }
  }

  &__content {
    @apply p-4;
  }
}
</style>
