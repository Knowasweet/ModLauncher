<template>
  <svg
    width="39"
    height="27"
    viewBox="0 0 39 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="click"
  >
    <path
      d="M6.17832 4.19829C6.96496 1.69954 9.28177 0 11.9014 0H32.5C35.8137 0 38.5 2.68629 38.5 6V21C38.5 24.3137 35.8137 27 32.5 27H4.45279C1.7507 27 -0.174003 24.3762 0.637397 21.7989L6.17832 4.19829Z"
      fill="url(#paint0_linear_6_99)"
    />
    <path
      ref="eventPath"
      d="M6.17832 4.19829C6.96496 1.69954 9.28177 0 11.9014 0H32.5C35.8137 0 38.5 2.68629 38.5 6V21C38.5 24.3137 35.8137 27 32.5 27H4.45279C1.7507 27 -0.174003 24.3762 0.637397 21.7989L6.17832 4.19829Z"
      fill="transparent"
      style="cursor: pointer"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6_99"
        x1="14.2903"
        y1="7.6415e-07"
        x2="33.5588"
        y2="39.4796"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#DDBE77" />
        <stop offset="0.911458" stop-color="#876516" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['click'])
const eventPath = ref(null)

const click = (event) => {
  if (!eventPath.value.ownerSVGElement) {
    return
  }

  const svgPoint = eventPath.value.ownerSVGElement.createSVGPoint()
  svgPoint.x = event.clientX
  svgPoint.y = event.clientY

  const transformedEventCoords = svgPoint.matrixTransform(eventPath.value.getScreenCTM().inverse())

  if (eventPath.value.isPointInFill(transformedEventCoords)) {
    emit('click')
  }
}
</script>
