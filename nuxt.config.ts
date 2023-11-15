/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'node:path'

export default defineNuxtConfig({
  ignore: ['temp/*'],
  // nitro: { preset: './preset' },
  experimental: {
    componentIslands: true,
    asyncContext: true,
  },
  alias: {
    // if not using pnpm
    cookie: resolve(process.cwd(), '/node_modules/cookie'),
    // cookie: 'cookie',
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    'nuxt-icon',
    '@hebilicious/authjs-nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@formkit/auto-animate/nuxt',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],


  authJs: {
    // default configuration
    // verifyClientOnEveryRequest: true,
    guestRedirectTo: '/', // where to redirect if the user is not authenticated
    // authenticatedRedirectTo: '/', // where to redirect if the user is authenticated
    // baseUrl: 'http://localhost:3000' // should be something like https://www.my-app.com
  },

  tailwindcss: {
    config: {

      darkMode: 'class',
    },
    exposeConfig: true,
    injectPosition: 'last',
  },

  build: {
    transpile: ['trpc-nuxt'],
  },
  runtimeConfig: {
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },

    },
    google: {
      clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    authJs: {
      secret: process.env.NUXT_AUTH_JS_SECRET,
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET,
    },
    db: {
      url: process.env.NUXT_DB_URL,
      dir: './server/db',
    },
  },
})
