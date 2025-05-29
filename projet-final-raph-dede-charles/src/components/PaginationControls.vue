<script setup>
defineProps({
  currentPage: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, required: true }
})

const emit = defineEmits(['page-change'])

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    emit('page-change', page)
  }
}
</script>

<template>
  <div class="flex justify-center mt-8 gap-2">
    <button 
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1 border rounded"
    >
      Précédent
    </button>
    
    <button
      v-for="page in totalPages"
      :key="page"
      @click="goToPage(page)"
      :class="{ 'bg-blue-500 text-white': page === currentPage }"
      class="px-3 py-1 border rounded"
    >
      {{ page }}
    </button>
    
    <button 
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 border rounded"
    >
      Suivant
    </button>
  </div>
</template>