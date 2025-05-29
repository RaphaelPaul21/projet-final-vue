<script setup>
import { onMounted } from 'vue'
import { useUrlStore } from '@/stores/urlStore'
import ShortLinkList from '@/components/ShortLinkList.vue'
import PaginationControls from '@/components/PaginationControls.vue'

const urlStore = useUrlStore()

onMounted(() => {
  urlStore.fetchUrls()
})

function handlePageChange(page) {
  urlStore.fetchUrls(page)
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Liste des liens courts</h1>
    
    <div v-if="urlStore.loading" class="text-center py-8">
      Chargement...
    </div>
    
    <ShortLinkList v-else :urls="urlStore.urls" />
    
    <PaginationControls
      :current-page="urlStore.pagination.currentPage"
      :total-items="urlStore.pagination.totalItems"
      :items-per-page="urlStore.pagination.itemsPerPage"
      @page-change="handlePageChange"
    />
  </div>
</template>