<script setup lang="ts">
import { EAuthorizationRoutesName } from '@/router/collections'
import ElRoute from '@/components/Controller/ElRoute.vue'
import { computed, ref } from 'vue'

const SignIn = computed(() => {
  return { name: EAuthorizationRoutesName.AUTHORIZATION }
})

const SignUp = computed(() => {
  return { name: EAuthorizationRoutesName.REGISTRATION }
})

const sitemap = ref([
  { text: 'Benefits', road: SignIn, id: 1 },
  { text: 'Review', road: SignUp, id: 2 },
])

const actions = ref([
  { text: 'SignIn', road: SignIn, id: 1 },
  { text: 'SignUp', road: SignUp, id: 2 },
])
</script>

<template>
  <header class="el-header">
    <div class="container">
      <div class="el-header__applogotip">APPLOGOTIP</div>
      <div class="el-header__navigation">
        <div class="el-header__sitemap">
          <ElRoute :routerList="sitemap" />
        </div>
        <div class="el-header__actions">
          <ElRoute :routerList="actions" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.container {
  @apply flex flex-row justify-between items-center gap-4;
  @apply mx-auto w-full px-4;
}

.el-header {
  @apply fixed top-0 left-0;
  @apply flex items-center;
  @apply h-16 w-full;
  @apply bg-gray-800;

  &__ {
    &applogotip {
      @apply text-white;
    }

    &navigation {
      @apply flex flex-row gap-4;
    }

    &sitemap {
      @apply flex flex-row gap-4;
      @apply text-white;
    }

    &actions {
      @apply flex flex-row gap-4;
      @apply text-white;
    }
  }
}
</style>
