<script setup lang="ts">
import { HOME, SITEMAP_ITEMS, ACTION_ITEMS } from '@/utils/mock/header-items';
import ElRoute from '@/components/Controller/ElRoute.vue';
</script>

<template>
  <header class="el-header">
    <div class="el-header__container">
      <div class="el-header__sitemap">
        <RouterLink :to="HOME">
          <img
            src="https://theme653-apparel-free.myshopify.com/cdn/shop/t/2/assets/logo.png"
            alt="Logo"
            class="el-header__applogotip"
          />
        </RouterLink>
      </div>
      <nav class="el-header__navigation">
        <div class="el-header__sitemap">
          <ElRoute :routerList="SITEMAP_ITEMS" />
        </div>
        <div class="el-header__actions">
          <ElRoute :routerList="ACTION_ITEMS" />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.el-header {
  @apply bg-[#262626] shadow-md;
  @apply fixed top-0 left-0;
  @apply flex items-center;
  @apply h-16 w-full z-20;

  &__ {
    &container {
      @apply flex flex-row justify-between items-center gap-4;
      @apply mx-auto w-full px-4;
    }

    &navigation {
      @apply flex flex-row gap-4;
    }

    &applogotip {
      @apply h-8 w-8;
    }

    &sitemap,
    &actions {
      @apply flex flex-row gap-4;
      @apply text-white;
    }
  }
}
</style>
