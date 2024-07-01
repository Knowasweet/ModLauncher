<template>
  <div class="btn">
    <TrapezoidButton v-if="!isActive" @click="toggleIsFavorite" />
    <img
      class="btn__icon-star"
      src="@/assets/svg/star.svg"
      alt="icon-star"
      @click="toggleIsFavorite"
    />
  </div>
</template>

<script setup>
import TrapezoidButton from '@/components/buttons/TrapezoidButton.vue'
import { ref } from 'vue'

defineProps({
  isFavorite: {
    type: Boolean,
    required: true
  }
})

const isActive = ref(false)
const toggleIsFavorite = () => {
  isActive.value = !isActive.value
  // isFavorite.value = !isFavorite.value
}
</script>

<style scoped lang="scss">
.btn {
  position: absolute;
  right: 8.5px;
  bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39.5px;
  height: 27px;

  &__icon-star {
    position: absolute;
    right: 10.5px;
    width: 13px;
    height: 12px;
    cursor: pointer;
    user-select: none;
  }
}
</style>
