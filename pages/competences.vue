<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const zero = ref("0%");

</script>
<template>
    <decor :couleur="rFonce" :taille="zero" :larg="moitie"/>
    <div class="position-absolute top-50 start-50 translate-middle">
        <p>Liste des compétences</p>
    </div>
    
</template>