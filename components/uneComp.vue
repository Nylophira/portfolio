<script setup>

const props = defineProps ( {
    nom:  String,
    lvl: String,
    src: String
 }) 

</script>

<template>
    <figure class="figure d-flex align-items-center flex-column  me-2">
        <img class=' figure-img img-fluid rounded' :src="src" :alt="'icone '+nom">
        <figcaption class="figure-caption text-center">{{ nom }}</figcaption>
    </figure>
    <div id="barreProgr">
        <div class="progress" role="progressbar" aria-label="Success example" :aria-valuenow="lvl" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" :style="{width: lvl}"></div>
        </div>
    </div>
    
</template>

<style lang="scss">

#comp {
    .figure.d-flex.align-items-center {

        margin-bottom: 0;
        height: 100%;

        .figure-img.img-fluid {
            //height: 30%;
            width: auto;
        }

        .figure-caption.text-center {
            font-weight: 700;
        }
    }
    

    #barreProgr {

        width: 80%;

        .progress-bar {
            background-color: $jaune;
        }


    }
    
}


</style>