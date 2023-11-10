<script setup>

 /*   const props = defineProps({
  msg: Object
}) */

//Changement de format en fonction de la localisation
const entree = ref("entree");
const actif = ref("");

const route = useRoute();

watch(() => route.path, (newPath) => {
    if (newPath === '/') {
        entree.value = 'entree';
    } else {
        entree.value = 'autre';
    }
});

//soulignement du cv ou du contact
function cvCont(qui) {
    actif.value = qui;
} 
</script>

<template>
    <nav :class=entree class="px-3">
        <ul class="nav nav-underline justify-content-end d-flex align-items-center">       
            <li class="nav-item" v-if="entree=='autre'">
                <NuxtLink to="/" class="nav-link icone icon-link "><i class="bi bi-house"></i></NuxtLink>
            </li>
            <li class="nav-item ms-auto px-4">
                <NuxtLink to="/pres" class="nav-link" >Présentation</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink to="/projets" class="nav-link" >Projets</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink to="/competences" class="nav-link">Compétences</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink to="/contact" class="nav-link" :class="actif==='CV'? '':'non'" @click="cvCont('CV')">CV</NuxtLink>
            </li>
            <li class="nav-item px-4">
                <NuxtLink to="/contact" class="nav-link" :class="actif==='cont'? '':'non'" @click="cvCont('cont')">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">

.entree {
    background-color: $rouge;

   .nav {
        
        padding-top: 5px;

        .nav-link {
            color: white;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 

        }
        .nav-link:hover {
            color: white;
            border-bottom: 3px solid rgb(255, 255, 255);
        }
    }
}

.nav {
    .nav-link {
        color: rgb(0, 0, 0);
        font-family: 'DM Serif Display';
        
        .bi.bi-house {
            font-size: 24px;
        }

    }  

    .nav-link:hover {
        color: $rouge;
    }

    .nav-link.icone {
        border-bottom: none;
    }


    .router-link-active.router-link-exact-active.nav-link {
        border-bottom: 3px solid $rouge;
        color: black;

    }

    .router-link-active.router-link-exact-active.nav-link.non {
            border-bottom: none;
        }

}


</style>