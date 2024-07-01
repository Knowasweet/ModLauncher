<template>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#DBDDE0'
    }"
    :loop="true"
    :navigation="true"
    :spaceBetween="18"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="main-slider"
  >
    <SwiperSlide class="main-slider__card" v-for="(img, index) in thumbnails" :key="index">
      <Image class="main-slider__img" :imgPath="img" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import Image from '@/components/Image.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/navigation'
import 'swiper/css'

import { Navigation, Thumbs } from 'swiper/modules'

const modules = [Navigation, Thumbs]

defineProps({
  thumbsSwiper: {
    type: Object
  },
  thumbnails: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss">
.main-slider {
  width: 694px;

  &__card {
    height: 380px;
  }

  &__img {
    object-fit: cover;
    width: 694px;
    border-radius: 24px;
  }
}
</style>
