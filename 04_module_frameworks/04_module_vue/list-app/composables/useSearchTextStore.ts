import { defineStore } from "pinia";

export const useSearchTextStore = defineStore('searchHandler', {
  state: () => ({
    searchText: '',
  }),
  getters: {
    companyName: (state: any): string => {
      return state.searchText
    }
  },
  actions: {
    setCompanyName: ( searchText: string) => {
      this.state.searchText = searchText
    }
  },
})