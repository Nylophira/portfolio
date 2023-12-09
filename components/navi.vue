<script setup>

const route = useRoute();

//Changement de format en fonction de la localisation
const entree = ref("entree");

///en cas d'actualisation de la page
if (route.path == "/") {
  entree.value = 'entree';
} else {
    entree.value = 'autre';
}
//const actif = ref("");

//en cas de changement de page
watch(() => route.path, (newPath) => {
    if (newPath === '/') {
        entree.value = 'entree';
    } else {
        entree.value = 'autre';
    }
});

//soulignement du cv ou du contact
/* function cvCont(qui) {
    actif.value = qui;
}  */



//ouverture/fermeture des mentions légales
//fermeture des mentions
const props = defineProps({
    ferme: Boolean,
    menu: String
})

const emit = defineEmits(['change', 'update:menu']);
const ouvre = ref(props.ferme);



const ouverture = () => {
    
    ouvre.value = true;
    emit('change', ouvre.value)
   //emit('change', 'ferme');
}

//responsive tablette / ordi
const show = ref(props.menu);
const navLigne = ref("justify-content-end align-items-center w-100");
const navCol = ref("position-absolute");
//const menuTabl = ref("");

const menuO = () => {
    if (show.value) {
        show.value = '';
    } else {
        show.value = 'show';
    }
    emit('update:menu', show.value); 
} 

const clickMobile = () => {
    if (show.value) {
        show.value = '';
        emit('update:menu', show.value); 
    }
}

watch(() => props.menu, (newValue) => {
      show.value = newValue;
    });


</script>

<template>
    <nav v-if="!((entree=='entree')&&(show=='show'))" :class="(entree=='entree' ? 'entree d-none d-lg-flex':'')" class="px-3 pt-1 navbar navbar-expand-lg">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <!-- il va falloir trouver un truc pour que quand on clique ça enlève show -->
            <button @click=menuO class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="show" id="navbarSupportedContent">
                <ul class="navbar-nav nav-underline d-flex" :class="show ? navCol : navLigne">
                    <li @click="clickMobile" class="nav-item" v-if="entree=='autre'" :class="show ? 'px-4' : ''">
                        <NuxtLink to="/" class="nav-link icone icon-link ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                            </svg>
                        </NuxtLink>
                    </li>
                    <li @click="clickMobile" class="nav-item px-4" :class="show ? '':'ms-auto'">
                        <NuxtLink to="/pres" class="nav-link" >Présentation</NuxtLink>
                    </li>
                    <li @click="clickMobile" class="nav-item px-4">
                        <NuxtLink to="/projets" class="nav-link" >Projets</NuxtLink>
                    </li>
                    <li @click="clickMobile" class="nav-item px-4">
                        <NuxtLink to="/competences" class="nav-link">Compétences</NuxtLink>
                    </li>
                <!--  <li class="nav-item px-4">
                        <NuxtLink to="/contact" class="nav-link" :class="actif==='CV'? '':'non'" @click="cvCont('CV')">CV</NuxtLink>
                    </li> -->
                    <li @click="clickMobile" class="nav-item px-4">
                        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
                    </li>
                    <li @click="clickMobile" class="nav-item px-4">
                        <a class="nav-link" @click="ouverture">Mentions Légales</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

//Navigation entre les pages
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
} */

.entree {
    background-color: $rouge;
    position: relative;
    z-index: +2;

   .navbar-nav {

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

.navbar-nav {
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

///partie tablette
.collapse.navbar-collapse.show {
    z-index: 1000;

    ul {
        background-color: white;
        border-radius: 10px;
    }
    
}

/* .entree {

    .collapse.navbar-collapse.show {

    ul {
        background-color: $rouge;
    }
    
}
} */



</style>