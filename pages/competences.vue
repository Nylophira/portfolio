<script setup>

//couleur du décor
const rFonce = ref("#941B0C");
const moitie = ref("50%");
const zero = ref("0%");

///Les competences
import comp from "../data/comp.json";

///Les compétences selon si c'est natif ou un framework
const compNat = ref(comp.filter(values => values.type==='natif'));
const compFram = ref(comp.filter(values => values.type==='framework'));

//afficher les compétences
const voirNatif = ref(false);
const voirFram = ref(false);
function clikPhoto (elem) {
    if (elem == "natif") {
        voirNatif.value = !voirNatif.value;
    } else {
        voirFram.value = !voirFram.value;
    }
   
}

</script>

<template>
    <decor :couleur="rFonce" :taille="zero" :larg="moitie"/>
        <div class="row d-flex h-100 align-items-center">
            <div  @click="clikPhoto('natif')" class="col position-relative d-flex">
                <div class="w-100 d-flex justify-content-center" v-if="voirNatif==false">
                    <h3 class="position-absolute mt-5 fw-bold">Langage de développement</h3>
                    <img src="/img/php-illus2.jpg" alt="Personne tenant un autocollant php"  class="img-fluid w-100 h-100">
                </div>
            </div>
            <div class="col">
               <div class="row">
                    <div class="col position-relative d-flex justify-content-center">
                        <h3 class="position-absolute mt-5 fw-bold">Framework et librairie</h3>
                        <img src="/img/react-illus.jpg" alt="Personne tenant un autocollant react"  class="img-fluid w-100 object-fit-cover">
                    </div>
               </div>
               <div class="row">
                    <div class="col">
                        Partie ent
                    </div>
               </div>
            </div>
        </div>
   <!--  <div id="ContComp" class="d-flex flex-column align-items-center ">
        <h2 id="titreComp">Liste des compétences</h2> 
        <div id="comp" class="d-flex flex-row justify-content-around">
            <div @click="clikPhoto('natif')" id="natif" class="d-flex flex-column align-items-center justify-content-center border">
                <div v-if="voirNatif==false" id="imgCont" class="position-relative start-0 d-flex flex-column align-items-center">
                   <h3 class="mt-3 position-absolute">Langage natif</h3>
                    <img src="/img/php-illus2.jpg" alt="Personne tenant un autocollant php"  class="img-fluid" id="imgNatif">
                </div>
                <div v-else class="d-flex flex-column flex-wrap justify-content-around">
                    <div class="d-flex flex-row align-items-center justify-content-between me-3" v-for="values in compNat" :key="values.id">
                        <UneComp :nom= "values.name" :lvl="values.lvl+'%'" :src="values.img"/>
                    </div>
                </div>
            </div>
            <div @click="clikPhoto('fram')" id="framework" class="d-flex flex-column align-items-center border">
                <div v-if="voirFram==false" id="imgCont" class="position-relative start-0 d-flex flex-column align-items-center">
                    <h3 class="mt-3 position-absolute">Framework et librairie</h3>
                    <img src="/img/react-illus.jpg" alt="Personne tenant un autocollant react"  class="img-fluid" id="imgNatif">
                </div>
                <div  v-else class="d-flex flex-column flex-wrap justify-content-around">
                    <div class="d-flex flex-row align-items-center justify-content-between me-3" v-for="values in compFram" :key="values.id">
                        <UneComp :nom= "values.name" :lvl="values.lvl+'%'" :src="values.img"/>
                    </div>
                </div>
            </div>
        </div
    </div>>-->
</template>

<style lang="scss">

.row.d-flex.h-100.align-items-center {
    .col {
        height: 80%;

        h3.position-absolute.mt-5 {
            color: white;
        }
    }
}


/* #ContComp {
    
    margin-top: 5%;
    //height: 80%;

    #comp {
    
        width: 100%;
        //height: auto;
   
        #natif, #framework {
            width: 45%;
            //height: 80%;
            height: 550px;
            border-radius: 30px;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            
            #imgCont {

                width: 100%;
                height: 100%;

                h3 {
                    top: 30%;
                    color: white;
                    font-weight: 700;
                }

                #imgNatif {
                height: 100%;
                width: 100%;
                object-fit: cover;
                border-radius: 30px;
            }

            }
            

            .d-flex.flex-column.flex-wrap {
                height: 90%;
                width: 90%;

                .d-flex.flex-row.align-items-center {
                    margin-bottom: 10px;
                    height: 20%;
            }
            }
              
        }
    }
} */



</style>