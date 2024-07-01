<template>
  <img :src="imgUrl" />
</template>

<script setup>
const props = defineProps({
  imgPath: {
    type: String,
    required: true
  }
})

const imgUrl = new URL(props.imgPath, import.meta.url).href
</script>
