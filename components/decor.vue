<script setup>

const props = defineProps ( {
    couleur: String,
    taille: String,
    larg: String
 }) 


</script>

<template>
    <div id="decorH" class="position-absolute start-0 mt-3 ms-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
    <div id="decorB" class="position-absolute bottom-0 end-0 me-3 mb-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
</template>

<style lang="scss">

    /* #test {
       height: 90%;
       width: 80%;
       min-height: 500px;
       max-width: 100%;
    } */
    
    #decorH {
        border-top: 30px solid ;
        border-left: 30px solid ;
        top: 5%;

    }

    #decorB {
        border-bottom: 30px solid;
        border-right: 30px solid;
       /*  left:100% */
    }
    
</style>