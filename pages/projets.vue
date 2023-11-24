<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const quart = ref("25%");

//Les projets
import projet from "../data/projet.json";

//partie si la modale est ici
/* const test = ref(false);
const nom = ref('pouet');
function change () {
    test.value =!test.value
}  */

</script>
<template>
    <decor :couleur="rFonce" :taille="moitie" :larg="quart"/>
    <div class="row d-flex align-items-center" id="contProjets">
        <div class="col-lg-4 col-sm-4 mb-2 mb-sm-0 g-3 d-flex h-50" v-for="values in projet" :key="values.id">
            <!--  <UnProjet  @click="change()" @ouvert = "(x) => { nom = x.name }" :nom="values.name" :langue="values.language" :cov="values.pictures" />  -->
               <UnProjet :nom="values.name" :langue="values.language" :cov="values.pictures" :carrousel="values.carrousel" :descrip="values.description" :git="values.github"/>
        </div>
        <!--  <div v-if="test" @click ="change()" class="modal-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        <div v-if="test" class="modal position-absolute top-50 start-50" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">{{ nom }}</h3>
                        <button @click="change()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div> -->

    </div>
    
</template>

<style lang="scss">


#contProjets {
    width: 80%;
    height: 70%;
}




</style>