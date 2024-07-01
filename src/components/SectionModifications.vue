<template>
  <div class="mods">
    <div class="mods__header">
      <div class="mods__header-title">{{ title }}</div>
      <a
        href="#"
        v-if="!isShowAll && mods.length > 4"
        @click.prevent="toggleAllMods"
        class="mods__header-btn"
      >
        See all
      </a>
    </div>

    <div v-if="loading" class="mods__loading-message">Загрузка...</div>
    <div v-else class="mods__list">
      <ModificationCard v-for="mod in displayedMods" :key="mod.id" :mod="mod" />
    </div>
  </div>
</template>

<script setup>
import ModificationCard from '@/components/card/ModificationCard.vue'
import { computed, onMounted, ref } from 'vue'
import { fetchMods } from '@/api/mods.js'

defineProps({
  title: {
    type: String,
    default: 'Section'
  }
})

const isShowAll = ref(false)

const mods = ref([])
const loading = ref(true)

const displayedMods = computed(() => {
  return isShowAll.value ? mods.value : mods.value.slice(0, 4)
})

const loadMods = async () => {
  try {
    mods.value = await fetchMods()
  } catch (error) {
    console.error('Ошибка загрузки данных модов:', error)
  } finally {
    loading.value = false
  }
}

const toggleAllMods = () => {
  isShowAll.value = !isShowAll.value
}

onMounted(loadMods)
</script>

<style scoped lang="scss">
.mods {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-title {
    font-size: 36px;
    line-height: 42px;
  }

  &__loading-message {
    height: 257px;
    color: $white;
    font-size: 28px;
  }

  &__header-btn {
    font-size: 20px;
    line-height: 28px;
    text-decoration: none;
    color: $white;
    cursor: pointer;

    &:hover {
      color: $gray;
    }

    &:visited {
      color: $white;
    }

    &:active {
      color: $gray;
      opacity: 0.8;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
}
</style>
