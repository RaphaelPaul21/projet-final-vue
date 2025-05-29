<script setup>
defineProps({
  urls: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="space-y-4">
    <ShortLinkListItem
      v-for="url in urls"
      :key="url.shortCode"
      :url="url"
    />
  </div>
</template>