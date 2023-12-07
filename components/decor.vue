<script setup>

const props = defineProps ( {
    couleur: String,
    taille: String,
    larg: String
 }) 


</script>

<template>
   <!-- <div class="container-fluid position-relative top-0 start-0 h-100 w-100">
        <div id="decorH" class="position-absolute start-0 mt-3 ms-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
        <div id="decorB" class="position-absolute bottom-0 end-0 me-3 mb-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
    </div> -->
   <div id="decorH" class="position-absolute start-0 mt-3 ms-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
    <div id="decorB" class="position-absolute bottom-0 end-0 me-3 mb-3" :style="{borderColor: couleur, height: taille, width: larg}"></div>
   
</template>

<style lang="scss">
    
    #decorH {
        border-top: 30px solid ;
        border-left: 30px solid ;
        top: 5%;

    }

    #decorB {
        border-bottom: 30px solid;
        border-right: 30px solid;
       
    }

    @media (max-width: 575px) {
        #decorH {
        border-top: 10px solid ;
        border-left: 10px solid ;
        }
        #decorB {
        border-bottom: 10px solid;
        border-right: 10px solid;
        }

    }
    
</style>