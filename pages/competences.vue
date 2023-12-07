<script setup>

//couleur du décor
const rFonce = ref("#941B0C");
const moitie = ref("50%");
const zero = ref("0%");

///Les competences
import comp from "../data/comp.json";

///Les compétences selon si c'est natif, un framework, un ent
const compNat = ref(comp.filter(values => values.type==='natif'));
const compFram = ref(comp.filter(values => values.type==='framework'));
const compENT = ref(comp.filter(values => values.type==='ent'));

//afficher les compétences
const voirNatif = ref(false);
const voirFram = ref(false);
const voirENT = ref(false);
function clikPhoto (elem) {
    if (elem == "natif") {
        voirNatif.value = !voirNatif.value;
    } else if (elem == "fram") {
        voirFram.value = !voirFram.value;
    } else {
        voirENT.value = !voirENT.value;
    }
   
}

</script>

<template>
    <decor :couleur="rFonce" :taille="zero" :larg="moitie"/>
    <!-- Partie langage de dev -->
        <div class="row d-flex h-100 w-100 align-items-center">
            <div  @click="clikPhoto('natif')" class="col position-relative d-flex">
                <div id="natif" class="w-100 d-flex justify-content-center" v-if="voirNatif==false">
                    <h3 class="position-absolute mt-5 fw-bold text-center">Langage de développement</h3>
                    <img src="/img/php-illus2.jpg" alt="Personne tenant un autocollant php"  class="img-fluid w-100 h-100 object-fit-cover">
                </div>
                <div v-else  class="d-flex flex-column flex-wrap justify-content-between w-100">
                    <div class="d-flex flex-row align-items-center justify-content-between me-3 mb-2" v-for="values in compNat" :key="values.id">
                        <UneComp :nom= "values.name" :lvl="values.lvl+'%'" :src="values.img"/>
                    </div>
                </div>
            </div>
            <div class="col">
                <!-- Partie framework -->
               <div class="row h-50 pb-3">
                    <div  @click="clikPhoto('fram')" class="col h-100 position-relative d-flex justify-content-center">
                        <div id="framework" class="w-100 d-flex justify-content-center" v-if="voirFram==false">
                            <h3 class="position-absolute mt-5 fw-bold text-center">Framework et librairie</h3>
                            <img src="/img/react-illus.jpg" alt="Personne tenant un autocollant react"  class="img-fluid w-100 object-fit-cover">
                        </div>
                        <div  v-else class="d-flex flex-column flex-wrap justify-content-around w-100">
                            <div class="d-flex flex-row align-items-center justify-content-between me-3 mb-2" v-for="values in compFram" :key="values.id">
                                <UneComp :nom= "values.name" :lvl="values.lvl+'%'" :src="values.img"/>
                            </div>
                        </div>
                    </div>
               </div>
               <!-- Partie ENT -->
               <div class="row h-50">
                <div  @click="clikPhoto('ent')" class="col h-100 position-relative d-flex justify-content-center">
                        <div id="framework" class="w-100 d-flex justify-content-center" v-if="voirENT==false">
                            <h3 class="position-absolute mt-5 fw-bold text-center">Environnement de travail</h3>
                            <img src="/img/ent-illus.jpg" alt="Personne tenant un autocollant react"  class="img-fluid w-100 object-fit-cover">
                        </div>
                        <div  v-else class="d-flex flex-column flex-wrap justify-content-around w-100">
                            <div class="d-flex flex-row align-items-center justify-content-between me-3 mb-2" v-for="values in compENT" :key="values.id">
                                <UneComp :nom= "values.name" :lvl="values.lvl+'%'" :src="values.img"/>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
</template>

<style lang="scss">

.row.d-flex.h-100.align-items-center {
    .col {
        height: 80%;

        h3.position-absolute.mt-5 {
            color: white;
        }

        #natif, #framework {
            border-radius: 30px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

            .img-fluid.w-100.object-fit-cover {
                border-radius: 30px;
            }
        }

        .d-flex.flex-row.align-items-center.justify-content-between.me-3.mb-2 {
            height: 10%;
        }
    }
}


</style>