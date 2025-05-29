import { defineStore } from 'pinia'
import { useApi } from '@/composables/api'

export const useUrlStore = defineStore('urls', {
  state: () => ({
    urls: [],
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0
    },
    loading: false
  }),
  
  actions: {
    async fetchUrls(page = 1) {
      this.loading = true
      const $api = useApi()
      try {
        const response = await $api('/rest/v2/short-urls', {
          query: { page, itemsPerPage: this.pagination.itemsPerPage }
        })
        this.urls = response.shortUrls
        this.pagination = {
          currentPage: page,
          itemsPerPage: this.pagination.itemsPerPage,
          totalItems: response.pagination.totalItems
        }
      } finally {
        this.loading = false
      }
    },
    
    async createUrl(urlData) {
      const $api = useApi()
      return await $api('/rest/v2/short-urls', {
        method: 'POST',
        body: {
          longUrl: urlData.longUrl,
          customSlug: urlData.customSlug || undefined,
          title: urlData.title || undefined,
          tags: urlData.tags || []
        }
      })
    }
  }
})