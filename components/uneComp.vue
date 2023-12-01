<script setup>

const props = defineProps ( {
    nom:  String,
    lvl: String,
    src: String
 }) 

</script>

<template>
    <figure class="figure d-flex flex-row flex-wrap justify-content-start align-items-center my-0 h-100">
        <img class='figure-img img-fluid rounded d-flex me-2 mb-0' :src="src" :alt="'icone '+nom">
        <figcaption class="figure-caption fw-bold d-flex">{{ nom }}</figcaption>
    </figure>
    <div id="barreProgr">
        <div class="progress" role="progressbar" aria-label="Success example" :aria-valuenow="lvl" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" :style="{width: lvl}"></div>
        </div>
    </div>
</template>

<style lang="scss">


.figure.d-flex {

    width: 30%;

    .figure-img.img-fluid {
        width: 30%;
    }

}
    

#barreProgr {

    width: 95%;

    .progress {
        background-color: rgb(229, 219, 201);
    }

    .progress-bar {
        background-color: $jaune;
    }


}
    
 


</style>