<template>
  <foote class="el-footer">
    <div class="el-footer__container">
      <p class="el-footer__text">
        This site is designed for presentation. Based on the rights of the
        creator. Not for sale.
      </p>
    </div>
  </foote>
</template>

<style scoped lang="scss">
.el-footer {
  @apply bg-[#262626] shadow-md;
  @apply fixed bottom-0 left-0;
  @apply flex items-center;
  @apply h-7 w-full z-10;

  &__ {
    &container {
      @apply flex flex-row justify-center items-center gap-4;
      @apply mx-auto w-full px-4;
    }

    &text {
      @apply text-xs text-white;
    }
  }
}
</style>
