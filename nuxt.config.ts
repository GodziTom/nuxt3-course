// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: '123',
        // Keys within public, will be also exposed to the client-side
        public: {
          apiBase: '/api',
          categories : [
            { id: 'head', title : 'Tête'},
            { id: 'body', title : 'Hauts'},
            { id: 'other', title : 'Autres'},
            { id: 'legs', title : 'Bas'},
    
        ],
        }
      },
    modules: [
        '@nuxtjs/tailwindcss',
    ],
})
