<template>
  <div class="container">
    <main class="main">
      <MainModification />
      <SectionModifications title="Recommend" />
    </main>
  </div>
</template>

<script setup>
import MainModification from '@/components/MainModification.vue'
import SectionModifications from '@/components/SectionModifications.vue'
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: 32px auto 56px;
}
</style>
