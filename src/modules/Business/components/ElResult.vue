<script setup lang="ts">
import { useBusiness } from '../composable/useBusiness';
import ElButton from '@/components/Controller/ElButton.vue';
import StepPanel from 'primevue/steppanel';
import jsPDF from 'jspdf';

const { backCaption } = useBusiness();

function downloadPDF() {
  const doc = new jsPDF();

  // Установка шрифтів
  doc.setFont('helvetica');

  // Зміна стилю заголовка
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('Lorem Ipsum', 10, 20);

  // Вставка абзацу з нормальним шрифтом
  const content =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  const splitContent = doc.splitTextToSize(content, 180);

  // Зміна стилю абзацу
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(splitContent, 10, 40);

  // Завантаження PDF
  doc.save('LoremIpsum.pdf');
}
</script>

<template>
  <StepPanel v-slot="{ activateCallback }" value="3">
    <div class="stepper__wrapper">
      <div class="stepper__content">Result</div>
    </div>
    <div class="stepper__actions stepper__actions-start">
      <ElButton
        :button-action="() => activateCallback('2')"
        :variant="'default'"
      >
        {{ backCaption }}
      </ElButton>

      <ElButton :button-action="() => downloadPDF()" :variant="'default'">
        download
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
