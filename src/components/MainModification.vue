<template>
  <div class="main-mod">
    <div v-if="loading" class="main-mod__loading-message">Загрузка...</div>
    <div v-else class="main-mod__content">
      <ThumbnailGallery :thumbnails="mod.thumbnails" />
      <div class="main-mod__details">
        <a href="#" class="main-mod__details-title">{{ mod.name }}</a>
        <div class="main-mod__details-description">
          Description:
          {{ mod.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThumbnailGallery from '@/components/slider/ThumbnailGallery.vue'
import { onMounted, ref } from 'vue'
import { fetchMainMod } from '@/api/mods.js'

const mod = ref(null)
const loading = ref(true)

const loadMod = async () => {
  try {
    mod.value = await fetchMainMod()
  } catch (error) {
    console.error('Ошибка загрузки данных мода:', error)
  } finally {
    loading.value = false
  }
}

onMounted(loadMod)
</script>

<style scoped lang="scss">
.main-mod {
  &__loading-message {
    height: 515px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: $white;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 32px;
    align-items: center;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__details-title {
    font-size: 46px;
    font-weight: 500;
    line-height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    color: $white;
    cursor: pointer;

    &:hover {
      color: $gray;
    }

    :visited {
      color: $white;
    }

    &:active {
      color: $gray;
      opacity: 0.9;
    }
  }

  &__details-description {
    color: $gray;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
