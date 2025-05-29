<template>
  <nav class="bg-blue-600 text-white p-4">
    <div class="container mx-auto flex justify-between">
      <router-link to="/" class="font-bold">Shlink Frontend</router-link>
      <div class="flex gap-4">
        <router-link to="/create">Créer un lien</router-link>
        <router-link to="/links">Liste des liens</router-link>
        <router-link to="/tags">Tags</router-link>
      </div>
    </div>
  </nav>
</template>