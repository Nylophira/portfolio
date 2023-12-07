<script setup lang="ts">
 
//const runtimeConfig = useRuntimeConfig()


//Mon head
useHead({
  title: 'Portfolio - Amandine MILLET',
  meta: [
    { name: 'description', content: 'Présentation de mes compétences de développeur web' }
  ]/* ,
  script: [
    { src: './bootstrap/dist/js/bootstrap.min.js' }
  ] */
})


//valeurs pour la modale "mentions légales"
const ferme = ref(false);

function openML () {
    ferme.value = !ferme.value;
}

//valeurs du conteneur gris sur l'ouverture du menu burger sur tablette / mobile
const show = ref('');

function changechange () {
  if (show.value) {
        show.value = '';
    } else {
        show.value = 'show';
    }
 }

//apparition du menu ou non selon l'endroit (sur tablette/mobile)
const route = useRoute()

const entree = ref(false);
//pour l'actualisation
if (route.path == "/") {
  entree.value = true;
  //show.value = 'show';
} else {
    entree.value = false;
}

//en cas de changement de page
watch(() => route.path, (newPath) => {
    if (newPath === '/') {
        entree.value = true;
        //show.value = 'show';
    } else {
        entree.value = false;
        //show.value = '';
       
    }
});

//faire une variable genre classe qui définit si le navi il est display:none ou non lorsqu'on est sur entrée (et uniquement dans ce cas)
 console.log(show);

</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <Navi  @change="(x) => ferme = x" :ferme="ferme" :menu="show" @update:menu="(y) => show = y"/>
  <div class="container d-flex justify-content-center align-items-center">
    <!-- Partie modale -->
    <div v-if="ferme" @click="openML" class="modal-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    <div v-if="ferme" class="modal translate-middle top-50 start-50" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title ms-3 ps-1 border-danger border-start border-2">Mentions Légales</h3>
                  <button @click="openML()" type="button" class="btn-close align-self-start" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div>
                    <p>Ce site web est édité par Amandine Millet.</p>
                      <ul class="list-group">
                      <li class="list-group-item fw-bold">Ses coordonnées sont :</li>
                      <li class="list-group-item">218 allée des abeilles 84200 Carpentras</li>
                      <li class="list-group-item">amandine_millet@live.fr</li>
                      </ul>
                    <div>
                      <p>L'hébergement est : </p>
                    </div>
                  </div> 
                </div>
                <div class="modal-footer">
                  <p>copyright © 2023</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="((show=='show')&&(entree==false))" @click="changechange" class="modal-overlay position-absolute top-0 start-0 w-100 h-100" id="couvMenu"></div>
   <!-- <transition name="page" mode="out-in"><NuxtPage key="pages"/></transition> -->
   <!-- <NuxtLayout @change="(x) => ferme = x" :ferme="ferme" :menu="show" @update:menu="(y) => show = y">
    <div class="container d-flex justify-content-center align-items-center"> -->
    <NuxtPage/>
    <!-- </div>
  </NuxtLayout> -->
</div>
</template>

<style lang="scss">

/* fichiers ayant mon thème couleur */
@import './assets/theme.css';

/* Fichiers Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';
/* @import 'bootstrap-icons/font/bootstrap-icons.css' */


#couvMenu {
  z-index:1;
}

#__nuxt {
  height: 100vh;
  background-color: #f1f1f1bb;
}

.container.d-flex.justify-content-center.align-items-center {
  height: 93%;

}

/******* généralité ******/
img {
  object-fit: cover;
}

.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal {
  display: flex;
  width: max-content;
  height: max-content;
}


</style>