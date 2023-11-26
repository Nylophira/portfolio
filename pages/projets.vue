<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const quart = ref("25%");

//Les projets
import projet from "../data/projet.json";


</script>
<template>
    <decor :couleur="rFonce" :taille="moitie" :larg="quart"/>
    <div class="row d-flex align-items-center" id="contProjets">
        <div class="col-lg-4 col-sm-4 mb-2 mb-sm-0 g-3 d-flex h-50" v-for="values in projet" :key="values.id">
               <UnProjet :nom="values.name" :langue="values.language" :cov="values.pictures" :carrousel="values.carrousel" :descrip="values.description" :git="values.github"/>
        </div>
    </div>
    
</template>

<style lang="scss">


#contProjets {
    width: 80%;
    height: 70%;
}




</style>