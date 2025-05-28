<script setup>
import { ref } from 'vue';
import { useApi } from '@/composables/api';

const $api = useApi();
const longUrl = ref('');
const customSlug = ref('');
const title = ref('');
const tags = ref([]);
const isLoading = ref(false);
const result = ref(null);
const error = ref(null);

async function shortenUrl() {
  if (!longUrl.value) {
    error.value = 'Veuillez entrer une URL';
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const response = await $api('/rest/v3/short-urls', {
      method: 'POST',
      body: {
        longUrl: longUrl.value,
        customSlug: customSlug.value || undefined,
        title: title.value || undefined,
        tags: tags.value.length ? tags.value : undefined,
      }
    });
    
    result.value = response;
    console.log('URL raccourcie:', response);
  } catch (err) {
    error.value = err.data?.detail || 'Erreur lors du raccourcissement';
    console.error('Erreur:', err);
  } finally {
    isLoading.value = false;
  }
}

function resetForm() {
  longUrl.value = '';
  customSlug.value = '';
  title.value = '';
  tags.value = [];
  result.value = null;
}
</script>

<template>
  <main>
    <h1>Raccourcisseur d'URL</h1>
    
    <form @submit.prevent="shortenUrl" class="url-form">
      <div class="form-group">
        <label for="longUrl">URL à raccourcir*</label>
        <input
          id="longUrl"
          v-model="longUrl"
          type="url"
          placeholder="https://example.com"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="title">Titre (optionnel)</label>
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="Ma super URL"
        />
      </div>
      
      <div class="form-group">
        <label for="customSlug">Slug personnalisé (optionnel)</label>
        <input
          id="customSlug"
          v-model="customSlug"
          type="text"
          placeholder="mon-slug"
        />
      </div>
      
      <div class="form-group">
        <label>Tags (optionnel)</label>
        <!-- Nous implémenterons le composant de tags plus tard -->
        <input
          v-model="tags"
          type="text"
          placeholder="tag1,tag2"
        />
      </div>
      
      <div class="form-actions">
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'En cours...' : 'Raccourcir' }}
        </button>
        <button type="button" @click="resetForm" class="secondary">
          Effacer
        </button>
      </div>
    </form>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    
    <div v-if="result" class="result-container">
      <h3>Résultat :</h3>
      <p><strong>URL courte :</strong> {{ result.shortUrl }}</p>
      <p><strong>URL longue :</strong> {{ result.longUrl }}</p>
      <p v-if="result.title"><strong>Titre :</strong> {{ result.title }}</p>
      <div v-if="result.tags && result.tags.length">
        <strong>Tags :</strong>
        <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.url-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.secondary {
  background: #ddd;
  color: #333;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: #ff4444;
  margin-top: 20px;
}

.result-container {
  margin-top: 30px;
  padding: 15px;
  background: #e8f5e9;
  border-radius: 8px;
}

.tag {
  display: inline-block;
  margin: 2px 5px;
  padding: 3px 8px;
  background: #bbdefb;
  border-radius: 12px;
  font-size: 0.8em;
}
</style>