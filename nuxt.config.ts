import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-13',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr-CA' },
      title: 'Camplo · Sites web et CRM pour campings indépendants du Québec',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Camplo conçoit des sites de réservation et un logiciel de gestion pour les campings indépendants du Québec. Modernes. Fiables. Québécois.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_CA' },
        { property: 'og:title', content: 'Camplo · Sites web et CRM pour campings indépendants du Québec' },
        {
          property: 'og:description',
          content: 'Sites de réservation et logiciel de gestion pour campings indépendants, conçus au Québec.',
        },
        { property: 'og:url', content: 'https://camplo.ca' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Sentient', provider: 'fontshare', weights: [500, 700, 800] },
      { name: 'Satoshi', provider: 'fontshare', weights: [500, 700] },
      { name: 'General Sans', provider: 'fontshare', weights: [500, 600] },
    ],
  },

  site: {
    url: 'https://camplo.ca',
    name: 'Camplo',
  },

  robots: {
    allow: '/',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
