<script setup>

const rFonce = ref("#941B0C");
const moitie = ref("50%");
const quart = ref("25%");

</script>
<template>
    <decor :couleur="rFonce" :taille="moitie" :larg="quart"/>
    <div class="position-absolute top-50 start-50 translate-middle">
        <p>Projets</p>
    </div>
    
</template>