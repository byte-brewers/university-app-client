<template>
  <div class="el-horizontal-line__line_1"></div>
  <div class="el-horizontal-line__line_2"></div>
  <div class="el-horizontal-line__line_3"></div>
  <div class="el-horizontal-line__line_4"></div>
  <div class="el-horizontal-line__line_5"></div>
  <div class="el-horizontal-line__line_6"></div>
</template>

<style scoped lang="scss">
.el-horizontal-line {
  &__ {
    &line_1,
    &line_2,
    &line_3,
    &line_4,
    &line_5,
    &line_6 {
      @apply bg-[#262626] h-0.5 absolute;
    }

    &line_1 {
      @apply -top-[200px] left-[650px];
      @apply w-[200px];
    }

    &line_2 {
      @apply -top-[150px] -left-[200px];
      @apply w-[400px];
    }

    &line_3 {
      @apply -top-[100px] left-[100px];
      @apply w-[990px];
    }

    &line_4 {
      @apply -bottom-[100px] left-[600px];
      @apply w-[300px];
    }

    &line_5 {
      @apply -bottom-[150px] -left-[100px];
      @apply w-[800px];
    }

    &line_6 {
      @apply -bottom-[200px] left-[150px];
      @apply w-[200px];
    }
  }
}
</style>
