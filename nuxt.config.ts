export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxthub/core', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
