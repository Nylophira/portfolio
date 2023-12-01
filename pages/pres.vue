<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const quart = ref("25%");

</script>
<template>
    <decor :couleur="jaune" :taille="moitie" :larg="quart"/>
    <div class="row d-flex align-items-center">
        <div class="col">
           <img src="/img/Image1.png" alt="Avatar d'une femme à un poste de travail derrière un écran d'ordinateur. Elle porte un casque de chantier et des éléments de développpement informatique sont en arrière plan"  class="img-fluid w-100">
        </div>
        <div class="col-8 px-5">
            <h2>Présentation</h2>
            <p>Après presque 10 années d'expérience dans le domaine de la prévention des risques professionnels, mon désir de relever de nouveaux défis m'a conduit à entreprendre une reconversion dans le développement web, un domaine qui m'a toujours intéressée. <br> Ma soif d'apprendre ne m'ayant jamais quitté, je suis actuellement en quête de nouvelles opportunités professionnelles qui me permettront de continuer à élargir mes horizons dans le développement.</p>
        </div>
    </div>

</template>

<style lang="scss">

    .container  p {
        text-align: justify;
    }

</style>