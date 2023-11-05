<script setup>

 /*   const props = defineProps({
  msg: Object
}) */

//Changement de format en fonction de la localisation
const entree = ref("entree");
const route = useRoute();

    watch(() => route.path, (newPath) => {
      if (newPath === '/') {
        entree.value = 'entree';
      } else {
        entree.value = 'autre';
      }
    });


</script>

<template>
    <nav class="nav nav-underline" :class=entree>
        <ul class="nav nav-underline">       
            <li class="nav-item" v-if="entree=='autre'"><NuxtLink to="/" class="nav-link" >Accueil</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/pres" class="nav-link" >Présentation</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/projets" class="nav-link">Projets</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/competences" class="nav-link">Compétences</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/contact" class="nav-link">CV</NuxtLink></li>
            <li class="nav-item"><NuxtLink to="/contact" class="nav-link">Contact</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">

.entree {
    background-color: $rFonce;

   .nav .nav-link {
        color: white;
    }
}

.nav {
    .nav-link {
        color: rgb(0, 0, 0);
    }
}

</style>