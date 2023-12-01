<script setup>

const props = defineProps ({
    nom: String,
    langue: Array,
    cov: String,
    git: String,
    pages: String,
    carrousel: Array,
    descrip: Array
    //valeur: Boolean
})


///partie si la modale est ici.
const open = ref(false);
 function openModal () {
    open.value = !open.value;
}

//partie carrousel
const tablCarr = ref(props.carrousel.length);
function bougebouge (bouton) {
    const photo = document.querySelector(".active");
    photo.classList.remove("active");
    const ou = parseInt(photo.id);
    let newP = photo;
    if (bouton == "next") {
        //console.log(ou+1);
        if(ou+1>=tablCarr.value) {
            newP = document.getElementById(0);
        } else {
            newP = document.getElementById(ou+1);
        }
    } else {
        if(ou==0) {
           // console.log(ou-1);
            newP = document.getElementById(tablCarr.value-1);
        } else {
            newP = document.getElementById(ou-1);
        }
    }
    newP.classList.add("active");
}

///première illu 
onUpdated(() => {

    const cible = document.getElementById(0);
    if (cible) {
        cible.classList.add("active");
    }
})



</script>

<template>
        <!----- partie card ------->
        <div @click="openModal()" class="card h-100 w-100 d-flex">
            <i class="bi bi-info-circle-fill"></i>
            <img :src="cov" class="card-img-top img-fluid" alt="illustration du projet">
            <div class="card-body d-flex align-items-end flex-column justify-content-between pb-0 pt-1">
                <h2 class="card-title text-center w-100 mb-0">{{nom}}</h2>
                <div id="contIlluLang" class="d-flex w-50 pb-1 justify-content-end">
                    <img v-for="source in langue" :src="source" alt="langage de développement" class="img-fluid me-1"> 
                </div>
            </div>
        </div>
        <!----- partie modale ------->
       <div v-if="open" class="modal-overlay position-absolute top-0 start-0 w-100 h-100" @click="openModal()"></div>
       <div v-if="open" class="modal translate-middle top-50 start-50" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="d-flex flex-column align-items-center h-100">
                            <a v-if="git" :href="git" class="d-flex"><i class="bi bi-github"></i></a>
                                <a v-if="pages" :href="pages" class="position-relative d-flex">
                                    <i class="bi bi-laptop"></i>
                                    <i class="bi bi-box-arrow-up-right position-absolute top-50 translate-middle-y   translate-middle-x w-50"></i>
                                </a>
                        </div>
                        <!--  fonctionne pas la couleur du border.. -->
                        <h3 class="modal-title ms-3 ps-1 border-danger border-start border-2">{{ nom }}</h3>
                        <button @click="openModal()" type="button" class="btn-close align-self-start" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                   <!--  fonctionne pas le slide fade... -->
                    <div id="carouselE" class="carousel slide carousel-fade">
                        <div class="carousel-inner">
                            <div class="carousel-item" v-for="(values, index) in carrousel" :key="index" :id="index">
                                <img :src=values class="d-block w-100" alt="...">
                                <div class="modal-footer">
                                    <p>{{descrip[index]}}</p>
                                </div>
                            </div>
                        </div>
                        <button @click="bougebouge('prev')" class="carousel-control-prev" type="button">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button @click="bougebouge('next')" class="carousel-control-next" type="button">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
</template>

<style lang="scss">

#contProjets {

    .modal {
       /*  display: flex;
        width: max-content;
        height: max-content; */

        .modal-header {
            
            /* .modal-title.border-start.border-2.border-danger{
                border-left-color: $rouge;
            } */
            
            .bi.bi-github {
                font-size: 25px;
                color: black
            };

            .bi.bi-laptop {
                font-size: 30px;
                color: black
            };

            .bi.bi-box-arrow-up-right {
                font-size: 10px;
                color: $rFonce;
                left: 35%;
            }
        }

         /* #carouselE {
            img {
                height: 300px;
                object-fit: cover;
            }
        } */

        #carouselE {

            .carousel-control-next, .carousel-control-prev {
                height: 70%;
            }
             .carousel-control-prev-icon {
                background-image: url('/iconePrev.svg');
                width: 70%;
                height: 100%;
            }

            .carousel-control-next-icon {
                background-image: url('/iconeNext.svg');
                width: 70%;
                height: 100%;
            }
        } 
    } 


    .col-sm-4.mb-2.mb-sm-0.g-3 {
        .card {
            box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.10);
            border-radius: 30px;

            .bi.bi-info-circle-fill {
                display: none;
            
            } 

        .card-img-top {
                
                border-radius: 30px 30px 0 0;
                object-fit: cover;
                height: 60%;
        }

        .card-body {

            height: 30%;

                .card-title, .card-text {
                    font-size: 14px;
                }

                #contIlluLang {
                    height: 25%;
                    .img-fluid {
                        height: 100%;
                    }
                }

            }
        }
    }

   /*  A changer pour l'animation */
    .col-sm-4.mb-2.mb-sm-0.g-3 .card:hover {

         .bi.bi-info-circle-fill {
            display: flex;
            position: absolute;
            top:5%;
            right:5%;
            font-size: 30px;
            color: grey;
        }
        .card-img-top {
            height: 100%;
            border-radius: 30px;
        }

        .card-body, h2 {
            display: none;
            position: absolute;
            height: 0%;
        }
    }
}


</style>