<template>
  <footer class="el-footer">
    <div class="el-footer__container">
      <p class="el-footer__text">
        This site is designed for presentation purposes only. All rights
        reserved by the creator. Not for sale.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.el-footer {
  @apply bg-[#262626] shadow-md;
  @apply fixed bottom-0 left-0;
  @apply flex items-center;
  @apply h-10 w-full z-10;

  &__container {
    @apply flex flex-row justify-center items-center gap-4;
    @apply mx-auto w-full px-4;
  }

  &__text {
    @apply text-xs text-white text-center;
  }
}
</style>
