// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_GITHUB_API_KEY
    }
  }
})
