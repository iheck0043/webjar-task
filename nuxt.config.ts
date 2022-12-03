// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        postcss: {
          plugins: {
            "postcss-color-gray": {}
          }
        }
      }
})
