<script setup lang="ts">
 
//const runtimeConfig = useRuntimeConfig()
//const route = useRoute()

//Mon head
useHead({
  title: 'Portfolio - Amandine MILLET',
  meta: [
    { name: 'description', content: 'Présentation de mes compétences de développeur web' }
  ]
})


</script>

<template>
   <Navi />
  <div>
    <NuxtPage />
  </div>
</template>

<style>

/* fichiers ayant mon thème couleur */
@import './assets/theme.css';

/* Fichiers Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';



</style>