// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/storybook'
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    publicAssets: [
      {
        dir: 'public/storybook',
        baseURL: '/storybook',
        maxAge: 60 * 60 * 24 * 7 
      }
    ]
  }
})