<template>
  <div class="downloads">
    <img src="@/assets/svg/download.svg" alt="download" class="downloads__icon" />
    <div class="downloads__count">{{ formattedCount() }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const formattedCount = () => {
  return props.count.toLocaleString('de-DE')
}
</script>

<style scoped lang="scss">
.downloads {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  gap: 8px;
  align-items: center;

  &__icon {
    width: 16px;
    height: 16px;
  }

  &__count {
    font-size: 13px;
    line-height: 18px;
  }
}
</style>
