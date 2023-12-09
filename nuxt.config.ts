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
    //layoutTransition: { name: 'slide', mode: 'out-in'}
  } /*,
   plugins: [
    {
      src: './plugins/vue3-particles.ts',
      mode: 'client',
    }
  ] */
})