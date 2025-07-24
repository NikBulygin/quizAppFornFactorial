// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/storybook',
    'nuxt-auth-utils'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Auth0 configuration (using existing .env variables)
    oauth: {
      auth0: {
        clientSecret: process.env.NUXT_OAUTH_AUTH0_CLIENT_SECRET,
        domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
        clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
      }
    },
    public: {
      oauth: {
        auth0: {
          clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
          domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
        }
      }
    },
    session: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    }
  },
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