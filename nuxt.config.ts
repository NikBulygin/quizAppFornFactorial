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
  alias: {
    '~/types': './types'
  },
  runtimeConfig: {
    // Auth0 configuration (using existing .env variables)
    oauth: {
      auth0: {
        clientSecret: process.env.NUXT_OAUTH_AUTH0_CLIENT_SECRET,
        domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
        clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
      }
    },
    // Auth0 Machine-to-Machine configuration for Management API
    auth0: {
      m2mClientId: process.env.NUXT_AUTH0_M2M_CLIENT_ID || 'XA1vRtIYJWmOmqb3Syh15ZN8KupPuZIN',
      m2mClientSecret: process.env.NUXT_AUTH0_M2M_CLIENT_SECRET || 'w8nA8EV-NgXXHQGDGfINkoqkcIHyuYA8roHoS0EQiALOLEHYMTqA27fbDfK_huQ9',
    },
    public: {
      oauth: {
        auth0: {
          clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
          domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
        }
      }
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