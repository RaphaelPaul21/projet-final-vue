import { defineStore } from 'pinia'
import { useApi } from '@/composables/api'

export const useTagStore = defineStore('tags', {
  state: () => ({
    tags: [],
    loading: false
  }),
  
  actions: {
    async fetchTags() {
      this.loading = true
      const $api = useApi()
      try {
        const response = await $api('/rest/v2/tags')
        this.tags = response.tags
      } finally {
        this.loading = false
      }
    },
    
    async createTag(name) {
      const $api = useApi()
      await $api(`/rest/v2/tags`, {
        method: 'POST',
        body: { name }
      })
      await this.fetchTags()
    },
    
    async deleteTag(name) {
      const $api = useApi()
      await $api(`/rest/v2/tags/${name}`, {
        method: 'DELETE'
      })
      await this.fetchTags()
    }
  }
})