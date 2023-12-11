<script setup>

const props = defineProps ( {
    nom:  String,
    lvl: String,
    src: String
 }) 

 

</script>

<template>
    <figure class="figure d-flex flex-lg-row flex-column flex-lg-wrap flex-nowrap justify-content-lg-start justify-content-center align-items-center my-0 h-100">
        <img class='figure-img img-fluid rounded d-flex me-lg-2 mb-0' :src="src" :alt="'icone '+nom">
        <figcaption class="figure-caption text-center fw-bold d-flex">{{ nom }}</figcaption>
    </figure>
    <div id="barreProgr">
            <div class="progress" role="progressbar" aria-label="Success example" :aria-valuenow="lvl" aria-valuemin="0" aria-valuemax="100">
               <!-- <div class="progress-bar .progress-bar-animated." :style
                ="{transform: translate('-30px')}"></div> -->
                <div class="progress-bar .progress-bar-animated." :style
                ="{width: lvl}"></div>
            </div>
    </div>
</template>

<style lang="scss">



//animation
@keyframes apparition {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}


.figure.d-flex {

    width: 30%;

    .figure-img.img-fluid {
        width: 30%;
    }

}

#barreProgr {

    width: 80%;

    .progress {
        background-color: rgb(229, 219, 201);
    }

    .progress-bar {
        background-color: $jaune;
        animation: apparition 800ms;
    }
}
    

@media (max-width: 720px) {
   .figure.d-flex {
        .figure-img.img-fluid {
            width: 50%;
        } 
    }

    #barreProgr {

        width: 70%;
    }
}

@media (max-width: 540px) {

    .figure.d-flex {
       width: 40%;
       font-size: 14px;
    }

    #barreProgr {

        width: 60%;
    }
}


</style>