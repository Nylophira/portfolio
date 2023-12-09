<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const quart = ref("25%");

//Les projets
import projet from "../data/projet.json";


</script>
<template>
    <div class="container d-flex justify-content-center align-items-center h-100">
    <decor :couleur="rFonce" :taille="moitie" :larg="quart"/>
     <div class="row d-flex align-items-center justify-content-center container-fluid overflow-y-auto" id="contProjets">
       <div class="col-10 col-sm-4 mb-2 mb-sm-0 g-3 d-flex" id="myCard" v-for="values in projet" :key="values.id">
               <UnProjet :nom="values.name" :langue="values.language" :cov="values.pictures" :carrousel="values.carrousel" :descrip="values.description" :git="values.github" :pages="values.pages"/>
        </div>
    </div> 
  </div>
</template>

<style lang="scss">

#contProjets {
    height: 80%;
} 

@media (max-width: 575px) {
    #contProjets {
    width: 80%;
    
  }
}



</style>