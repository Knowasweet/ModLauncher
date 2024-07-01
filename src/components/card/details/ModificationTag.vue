<template>
  <div class="tag">
    <img src="@/assets/svg/tag.svg" alt="tag" class="tag__icon" />
    <div class="tag__name">{{ name }}</div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.tag {
  border-radius: 32px;
  background-color: $dark-blue;

  display: flex;
  gap: 6px;
  align-items: center;

  padding: 4px 10px 4px 8px;

  &__icon {
    width: 11px;
    height: 11px;
  }

  &__name {
    font-size: 13px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
