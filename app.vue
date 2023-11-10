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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
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
/* @import 'bootstrap-icons/font/bootstrap-icons.css' */


</style>