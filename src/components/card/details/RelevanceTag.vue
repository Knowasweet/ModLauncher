<template>
  <div v-if="title" class="relevance-tag">
    <div class="relevance-tag__title">{{ title }}</div>
    <div class="relevance-tag__icon">
      <svg
        width="74.28"
        height="35.46"
        viewBox="0 0 75 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relevance-tag__icon-front"
      >
        <path
          d="M61.5 24.1774H0V0.075993C13.5 -0.0949391 41 0.0759698 47.5 0.0759698C55.0166 0.0759698 58 0.398341 62.5 2.63999C76.5 9.61402 75 27.2542 73 35.4589C72.2 26.0235 65 24.0065 61.5 24.1774Z"
          :fill="title === 'HOT' ? '#D10000' : '#06BBA3'"
        />
      </svg>
      <svg
        width="11.5"
        height="15.9"
        viewBox="0 0 12 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="relevance-tag__icon-back"
      >
        <path
          d="M12 11.4591C12 2.84408 5 0.177536 0.5 0.177536V16.0742C9.5 15.0486 12 12.4846 12 11.4591Z"
          :fill="title === 'HOT' ? '#990000' : '#068170'"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<style scoped lang="scss">
.relevance-tag {
  position: absolute;
  top: 0;
  right: 0;

  &__title {
    position: absolute;
    font-size: 12px;
    line-height: normal;
    font-family: 'Play', sans-serif;
    z-index: 10;
    right: 5.5px;
    top: 3.69px;
  }

  &__icon {
    position: absolute;
    right: -22.28px;
    display: flex;
    justify-content: end;
  }

  &__icon-front {
    position: absolute;
    top: -1px;
  }

  &__icon-back {
    position: absolute;
    top: 22.5px;
    right: 2px;
  }
}
</style>
