<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const quart = ref("25%");

//Les projets
import projet from "../data/projet.json";

</script>
<template>
    <decor :couleur="rFonce" :taille="moitie" :larg="quart"/>
   <!--  <div class="position-absolute top-50 start-50 translate-middle">
        <p>Projets</p>
    </div> -->
    <div class="row row-cols-auto row-cols-md-2 g-4 position-absolute top-50 start-50 translate-middle justify-content-center">
        <div class="col d-flex align-items-center" v-for="values in projet" :key="values.id">
            <UnProjet :nom="values.name" :langue="values.language" :cov="values.pictures"/>
        </div>
    </div>
    
</template>

<style lang="scss">

.row.row-cols-auto.row-cols-md-2.g-4 {
    width: 80%;
    height: 550px;
    .col {
        width: 30%;
        max-height: 50%;
    }
}


</style>