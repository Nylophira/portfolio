<script setup>

//couleur du décor
const rFonce = ref("#941B0C");
const moitie = ref("50%");
const zero = ref("0%");

///Les competences
import comp from "../data/comp.json";


</script>
<template>
    <decor :couleur="rFonce" :taille="zero" :larg="moitie"/>
    <div class="position-absolute top-50 start-50 translate-middle">
        <p>Liste des compétences</p>
        <li v-for="values in comp">{{ values.name }}</li>
        <UneComp/>
    </div>
    
</template>