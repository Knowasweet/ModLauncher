<template>
  <div class="thumbnail-gallery">
    <MainSliderGallery :thumbsSwiper="thumbsSwiper" :thumbnails="thumbnails" />
    <div class="thumbnail-gallery__list">
      <SecondarySliderGallery @sendSwiper="setThumbsSwiper" :thumbnails="thumbnails" />
    </div>
  </div>
</template>

<script setup>
import MainSliderGallery from '@/components/slider/MainSliderGallery.vue'
import SecondarySliderGallery from '@/components/slider/SecondarySliderGallery.vue'
import { ref } from 'vue'

defineProps({
  thumbnails: {
    type: Array,
    required: true
  }
})

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>

<style lang="scss">
.thumbnail-gallery {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
