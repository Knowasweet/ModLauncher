<template>
  <div class="card">
    <a href="#" class="card__name">{{ mod.name }}</a>
    <div class="card__content">
      <Image :imgPath="mod.img" alt="modificationImage" class="card__content-img" />
      <div class="card__content-tags">
        <ModificationTag v-for="tag in mod.tags" :key="tag" :name="tag" />
      </div>
      <ModificationDownloads :count="mod.downloadCount" />
      <FavoriteButton :isFavorite="mod.isFavorite" />
      <RelevanceTag :title="mod.relevanceTag" />
    </div>
  </div>
</template>

<script setup>
import ModificationDownloads from '@/components/card/details/ModificationDownloads.vue'
import ModificationTag from '@/components/card/details/ModificationTag.vue'
import FavoriteButton from '@/components/buttons/FavoriteButton.vue'
import RelevanceTag from '@/components/card/details/RelevanceTag.vue'
import Image from '@/components/Image.vue'

defineProps({
  mod: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.card {
  background-color: $dark-blue;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  padding: 8px 8px 16px 8px;
  border-radius: 16px;

  &__name {
    color: $gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $gray;
      opacity: 0.9;
    }

    :visited {
      color: $gray;
    }

    &:active {
      color: $gray;
      opacity: 0.8;
    }
  }

  &__content {
    position: relative;
  }

  &__content-img {
    display: block;
    object-fit: cover;
    border-radius: 12px;
    width: 324px;
    height: 193px;
  }

  &__content-tags {
    width: 85%;
    max-height: 70%;
    overflow: hidden;
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
