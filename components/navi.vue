<script setup>

 /*   const props = defineProps({
  msg: Object
}) */

//Changement de format en fonction de la localisation
const entree = ref("entree");
const actif = ref("entree");
const route = useRoute();

    watch(() => route.path, (newPath) => {
      if (newPath === '/') {
        entree.value = 'entree';
        actif.value = 'entree';
      } else {
        entree.value = 'autre';
        actif.value = newPath;
      }
    });


</script>

<template>
    <!--  :class="actif=='/pres'? 'active':''"  
        :class="actif=='/projets'? 'active':''"
         :class="actif=='/competences'? 'active':''"
        ça fonctionne mais y a un problème sur le cv / contact du coup voir pour prendre les classes de vue plutôt ?-->
    <nav :class=entree class="px-3">
        <ul class="nav nav-underline justify-content-end">       
            <li class="nav-item" v-if="entree=='autre'">
                <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
            </li>
            <li class="nav-item ms-auto">
                <NuxtLink to="/pres" class="nav-link" >Présentation</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/projets" class="nav-link" >Projets</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/competences" class="nav-link">Compétences</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">CV</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">

.entree {
    background-color: $rouge;

   .nav {
        
        .nav-link {
            color: white;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        }
        .nav-link:hover {
            color: white;
        }
    }
}

.nav {
    .nav-link {
        color: rgb(0, 0, 0);
        font-family: 'DM Serif Display';
       
    }

    .nav-link:hover {
        color: $rouge;
    }
}


</style>