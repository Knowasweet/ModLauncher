<template>
  <Swiper
    @swiper="sendSwiper"
    :loop="true"
    :spaceBetween="18"
    :slidesPerView="4"
    :modules="modules"
    class="secondary-slider"
  >
    <SwiperSlide
      v-for="(img, index) in thumbnails"
      :key="index"
      :style="{ display: index === 0 ? 'none' : 'block' }"
      class="secondary-slider__card"
    >
      <Image class="secondary-slider__img" :imgPath="img" />
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
  thumbnails: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['sendSwiper'])
const sendSwiper = (swiper) => {
  emit('sendSwiper', swiper)
}
</script>

<style scoped lang="scss">
.secondary-slider {
  width: 694px;

  &__card {
    width: 160px;
    height: 95px;
  }

  &__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;
  }

  .swiper-slide {
    opacity: 1;

    &.swiper-slide-thumb-active {
      opacity: 0.6;
    }
  }
}
</style>
