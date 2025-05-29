<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useApi } from '@/composables/api'

const route = useRoute()
const $api = useApi()
const url = ref(null)
const visits = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    url.value = await $api(`/rest/v2/short-urls/${route.params.shortCode}`)
    visits.value = await $api(`/rest/v2/short-urls/${route.params.shortCode}/visits`)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-if="loading">Chargement...</div>
  
  <div v-else-if="url">
    <h1 class="text-2xl font-bold mb-4">Détails du lien</h1>
    
    <div class="bg-white p-6 rounded-lg shadow mb-8">
      <h2 class="text-xl font-semibold mb-2">{{ url.title || 'Sans titre' }}</h2>
      <p class="text-gray-600 mb-1">URL originale: {{ url.longUrl }}</p>
      <p class="text-blue-500 mb-1">URL courte: <a :href="url.shortUrl" target="_blank">{{ url.shortUrl }}</a></p>
      <p>Visites totales: {{ url.visitsCount }}</p>
    </div>
    
    <h2 class="text-xl font-semibold mb-4">Dernières visites</h2>
    <div class="space-y-4">
      <div v-for="visit in visits.visits" :key="visit.date" class="bg-white p-4 rounded shadow">
        <p>Date: {{ new Date(visit.date).toLocaleString() }}</p>
        <p>Referrer: {{ visit.referer || 'Aucun' }}</p>
        <p>User Agent: {{ visit.userAgent }}</p>
      </div>
    </div>
  </div>
</template>