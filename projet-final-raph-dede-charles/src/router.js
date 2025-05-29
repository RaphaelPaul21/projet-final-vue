import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CreateView from './views/CreateView.vue'
import ListView from './views/ListView.vue'
import DetailView from './views/DetailView.vue'
import TagsView from './views/TagsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/create', component: CreateView },
  { path: '/links', component: ListView },
  { path: '/links/:shortCode', component: DetailView },
  { path: '/tags', component: TagsView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})