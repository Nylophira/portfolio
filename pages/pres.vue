<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const quart = ref("25%");

</script>

<template>
 <div class="container d-flex justify-content-center align-items-center h-100">
    <decor :couleur="jaune" :taille="moitie" :larg="quart"/>
    <div class="row d-flex align-items-center flex-lg-row flex-column">
        <div class="col-6 col-lg py-2 py-sm-3 py-lg-0">
           <img src="/img/Image1.png" alt="Avatar d'une femme à un poste de travail derrière un écran d'ordinateur."  class="img-fluid w-100">
        </div>
        <div class="col-lg-8 px-4 px-sm-5">
            <h1 class="text-center text-lg-start">Présentation</h1>
            <p class="px-2 px-lg-0">Après presque 10 années d'expérience dans le domaine de la prévention des risques professionnels, mon désir de relever de nouveaux défis m'a conduite à entreprendre une reconversion dans le développement web, un domaine qui m'a toujours intéressée. <br> Ma soif d'apprendre ne m'ayant jamais quitté, je suis actuellement en quête de nouvelles opportunités professionnelles qui me permettront de continuer à élargir mes horizons dans le développement.</p>
        </div>
    </div>
</div>
</template>

<style lang="scss">

    .container  p {
        text-align: justify;
    }


    @media (max-width: 576px) {

        .container p.px-2.px-lg-0 {
            text-align: center;
        }

    }


</style>