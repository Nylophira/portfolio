// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/theme.scss" as *;'
        }
      }
    }
  },
   app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/portfolio/',
  }
})