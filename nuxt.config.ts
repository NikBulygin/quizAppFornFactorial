// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/storybook', '@pinia/nuxt', 'nuxt-auth-utils'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  runtimeConfig: {
    // Auth0 configuration
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

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    baseUrl: import.meta.env.DEV ? 'http://localhost:3002/' : 'https://quizzappfornfactorial.netlify.app/',
    locales: [
      { code: 'en', name: 'English', language: 'en', file: 'en.ts' },
      { code: 'kz', name: 'Қазақ', language: 'kk', file: 'kz.ts' },
      { code: 'ru', name: 'Русский', language: 'ru', file: 'ru.ts' },
      { code: 'uk', name: 'Українська', language: 'uk', file: 'uk.ts' },
      { code: 'es', name: 'Español', language: 'es', file: 'es.ts' },
      { code: 'fr', name: 'Français', language: 'fr', file: 'fr.ts' },
      { code: 'de', name: 'Deutsch', language: 'de', file: 'de.ts' },
      { code: 'zh', name: '中文', language: 'zh', file: 'zh.ts' },
      { code: 'ja', name: '日本語', language: 'ja', file: 'ja.ts' },
      { code: 'ko', name: '한국어', language: 'ko', file: 'ko.ts' },
      { code: 'pt', name: 'Português', language: 'pt', file: 'pt.ts' },
      { code: 'ar', name: 'العربية', language: 'ar', file: 'ar.ts' },
      { code: 'it', name: 'Italiano', language: 'it', file: 'it.ts' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18nRed',
      redirectOn: 'root',
    },
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