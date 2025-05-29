<script setup>
defineProps({
  initialData: {
    type: Object,
    default: () => ({
      longUrl: '',
      customSlug: '',
      title: '',
      tags: []
    })
  }
})

const emit = defineEmits(['submit'])

const formData = ref({...props.initialData})

function handleSubmit() {
  emit('submit', formData.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="longUrl">URL longue*</label>
      <input id="longUrl" v-model="formData.longUrl" required type="url">
    </div>
    
    <div>
      <label for="title">Titre</label>
      <input id="title" v-model="formData.title" type="text">
    </div>
    
    <div>
      <label for="customSlug">Slug personnalisé</label>
      <input id="customSlug" v-model="formData.customSlug" type="text">
    </div>
    
    <div>
      <label>Tags</label>
      <Multiselect 
        v-model="formData.tags"
        mode="tags"
        :options="availableTags"
        placeholder="Sélectionnez des tags"
      />
    </div>
    
    <button type="submit">Enregistrer</button>
  </form>
</template>