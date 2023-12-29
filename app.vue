<script setup lang="ts">

//Mon head
useHead({
  htmlAttrs: {
    lang: 'fr',
  },
  title: 'Portfolio - Amandine MILLET',
  meta: [
    { name: 'description', content: 'Présentation de mes compétences de développeur web' }, 
    { name: "viewport", content: "width=device-width, initial-scale=1"} 
  ]
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
} else {
    entree.value = false;
}

//en cas de changement de page
watch(() => route.path, (newPath) => {
    if (newPath === '/') {
        entree.value = true;
    } else {
        entree.value = false;       
    }
});

</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
  <Navi  @change="(x) => ferme = x" :ferme="ferme" :menu="show" @update:menu="(y) => show = y"/>
  <div class="container d-flex justify-content-center align-items-center" id="toutCont">
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
                        <li class="list-group-item">218 allée des abeilles 84200 Carpentras</li>
                        <li class="list-group-item">amandine_millet[at]live.fr</li>
                      </ul>
                    <div>
                      <p>Il est hebergé par : </p>
                      <ul class="list-group">
                        <li class="list-group-item">OVH</li>
                        <li class="list-group-item">SAS 2 rue Kellermann - 59100 Roubaix - France</li>
                      </ul>
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
    <NuxtPage/>
</div>
</template>

<style lang="scss">

/* fichiers ayant mon thème couleur */
@import './assets/theme.css';

/* Fichiers Bootstrap */
@import 'bootstrap/dist/css/bootstrap.min.css';



.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

#couvMenu {
  z-index:1;
}

#__nuxt {
  height: 100vh;
  background-color: #f1f1f1bb;
}

#toutCont {
  height: 90%;

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