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
    //pageTransition: { name: 'rotate', mode: 'out-in' }
    pageTransition: { name: 'page', mode: 'out-in' },
    //pageTransition: { name: 'bounce', mode: 'out-in' },
  } /*,
   plugins: [
    {
      src: './plugins/vue3-particles.ts',
      mode: 'client',
    }
  ] */
})