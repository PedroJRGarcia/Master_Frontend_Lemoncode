import { defineStore } from "pinia";

export const useSearchTextStore = defineStore('searchHandler', {
  state: () => ({
    searchText: 'Lemoncode',
  }),
  getters: {
    companyName: (state: any): string => {
      return state.searchText
    }
  },
  actions: {
    setCompanyName (searchText: string) {
      this.searchText = searchText
    }
  },
})