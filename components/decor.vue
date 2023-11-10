<script setup>

const props = defineProps ( {
    couleur: String,
    taille: String,
    larg: String
 }) 


</script>

<template>
    <div class="position-absolute start-0 mt-3 ms-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
    <div class="position-absolute bottom-0 end-0 me-3 mb-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
</template>

<style lang="scss">

    .position-absolute.start-0 {
        border-top: 30px solid ;
        border-left: 30px solid ;

    }

    .position-absolute.end-0 {
        border-bottom: 30px solid;
        border-right: 30px solid;
    }
    
</style>