<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
<<<<<<< Updated upstream
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
=======
</template>
>>>>>>> Stashed changes
