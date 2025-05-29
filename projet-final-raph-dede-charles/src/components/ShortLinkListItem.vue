<script setup>
defineProps({
  url: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="border p-4 rounded-lg shadow-sm">
    <div class="flex justify-between">
      <div>
        <h3 class="font-bold">{{ url.title || 'Sans titre' }}</h3>
        <p class="text-gray-500">{{ url.longUrl }}</p>
      </div>
      <div class="text-right">
        <a :href="url.shortUrl" target="_blank" class="text-blue-600">{{ url.shortUrl }}</a>
        <p class="text-sm">Visites: {{ url.visitsCount }}</p>
      </div>
    </div>
    
    <div v-if="url.tags.length" class="mt-2 flex flex-wrap gap-2">
      <TagBadge v-for="tag in url.tags" :key="tag" :tag="tag" />
    </div>
    
    <div class="mt-4 flex gap-2">
      <router-link :to="`/links/${url.shortCode}`" class="text-sm">Détails</router-link>
      <button class="text-sm text-red-600">Supprimer</button>
    </div>
  </div>
</template>