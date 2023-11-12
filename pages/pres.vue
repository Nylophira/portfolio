<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const quart = ref("25%");

</script>
<template>
    <decor :couleur="jaune" :taille="moitie" :larg="quart"/>
    <div class="position-absolute top-50 start-50 translate-middle d-flex flex-row align-items-center">
        <img src="/img/Image1.jpg" alt="Avatar d'une femme à un poste de travail derrière un écran d'ordinateur. Elle porte un casque de chantier et des éléments de développpement informatique sont en arrière plan"  class="me-4">
        <div class="ms-4">
            <h2>Présentation</h2>
            <p>Après presque 10 années d'expérience dans le domaine de la prévention des risques professionnels, mon désir de relever de nouveaux défis m'a conduit à entreprendre une reconversion dans le développement web, un domaine qui m'a toujours intéressée. <br> Ma soif d'apprendre ne m'ayant jamais quitté, je suis actuellement en quête de nouvelles opportunités professionnelles qui me permettront de continuer à élargir mes horizons dans le développement.</p>
        </div>
    </div>
    
</template>

<style lang="scss">

.position-absolute.top-50.start-50.translate-middle.d-flex {
    width: 70%;
    height: 70%;

    img {

        height: 60%;
        max-width: 50%;
        max-height: 100%;

    }

    div {
        flex-direction: column;

        p {
            text-align: justify;
            font-size: 18px;
        }
    }
}
</style>