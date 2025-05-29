<script setup>
import { getTagColor } from '@/composables/api'

const props = defineProps({
  tag: {
    type: String,
    required: true
  }
})

const bgColor = computed(() => getTagColor(props.tag))
const textColor = computed(() => {
  // Calculer une couleur de texte lisible selon le fond
  const r = parseInt(bgColor.value.slice(1, 3), 16)
  const g = parseInt(bgColor.value.slice(3, 5), 16)
  const b = parseInt(bgColor.value.slice(5, 7), 16)
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff'
})
</script>

<template>
  <span 
    class="px-2 py-1 rounded-full text-xs font-medium"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    {{ tag }}
  </span>
</template>