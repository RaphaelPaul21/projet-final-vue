<<<<<<< Updated upstream
<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
=======
<script setup>
import { ref } from 'vue'
import UrlForm from '@/components/UrlForm.vue'

const result = ref(null)
const error = ref(null)

function handleSubmit(formData) {
  // Ici vous devrez appeler l'API via le store
  console.log('Formulaire soumis:', formData)
  // Exemple:
  // try {
  //   result.value = await useUrlStore().createUrl(formData)
  // } catch (e) {
  //   error.value = e.message
  // }
}
>>>>>>> Stashed changes
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Créer un nouveau lien court</h1>
    <UrlForm @submit="handleSubmit" />
    
    <div v-if="result" class="mt-8 p-4 bg-green-50 rounded-lg">
      <h3 class="font-bold">Lien créé avec succès !</h3>
      <p>URL courte : <a :href="result.shortUrl" target="_blank" class="text-blue-600">{{ result.shortUrl }}</a></p>
    </div>
    
    <div v-if="error" class="mt-8 p-4 bg-red-50 text-red-600 rounded-lg">
      {{ error }}
    </div>
  </div>
</template>