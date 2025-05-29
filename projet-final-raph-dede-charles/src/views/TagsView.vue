<script setup>
import { onMounted, ref } from 'vue'
import { useTagStore } from '@/stores/tagStore'
import TagBadge from '@/components/TagBadge.vue'

const tagStore = useTagStore()
const newTagName = ref('')

onMounted(() => {
  tagStore.fetchTags()
})

async function addTag() {
  if (newTagName.value.trim()) {
    await tagStore.createTag(newTagName.value.trim())
    newTagName.value = ''
  }
}

async function deleteTag(tag) {
  if (confirm(`Supprimer le tag "${tag}" ?`)) {
    await tagStore.deleteTag(tag)
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Gestion des tags</h1>
    
    <div class="bg-white p-6 rounded-lg shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Ajouter un tag</h2>
      <div class="flex gap-2">
        <input
          v-model="newTagName"
          type="text"
          placeholder="Nouveau tag"
          class="flex-1 p-2 border rounded"
          @keyup.enter="addTag"
        >
        <button
          @click="addTag"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
      </div>
    </div>
    
    <div v-if="tagStore.loading" class="text-center py-8 text-gray-500">
      Chargement en cours...
    </div>
    
    <div v-else class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Liste des tags</h2>
      <div v-if="tagStore.tags.length" class="flex flex-wrap gap-4">
        <div v-for="tag in tagStore.tags" :key="tag" class="flex items-center gap-2">
          <TagBadge :tag="tag" />
          <button
            @click="deleteTag(tag)"
            class="text-red-600 hover:text-red-800"
            title="Supprimer"
          >
          </button>
        </div>
      </div>
      <p v-else class="text-gray-500">Aucun tag disponible</p>
    </div>
  </div>
</template>