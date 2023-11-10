<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const zero = ref("0%");

</script>
<template>
    <decor :couleur="jaune" :taille="zero" :larg="moitie"/>
    <div class="position-absolute top-50 start-50 translate-middle">
        <p>Formulaire de contact</p>
    </div>
    
</template>