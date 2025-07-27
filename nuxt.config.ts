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
    // Firebase configuration for Admin SDK
    firebase: {
      projectId: 'quizapp-7d44c',
      clientEmail: 'firebase-adminsdk-fbsvc@quizapp-7d44c.iam.gserviceaccount.com',
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      // Service account credentials
      serviceAccount: {
        type: 'service_account',
        project_id: 'quizapp-7d44c',
        private_key_id: 'a0ac266fde0049a377db75297e0fffaa79dbecf2',
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: 'firebase-adminsdk-fbsvc@quizapp-7d44c.iam.gserviceaccount.com',
        client_id: '111393333239116885309',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40quizapp-7d44c.iam.gserviceaccount.com',
        universe_domain: 'googleapis.com'
      }
    },
    public: {
      oauth: {
        auth0: {
          clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
          domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
        }
      },
      firebase: {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSANGING_SENDERID,
        appId: process.env.FIREBASE_APP_ID,
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