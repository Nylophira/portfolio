<script setup>

const props = defineProps ({
    nom: String,
    langue: Array,
    cov: String
})

const open = ref(false);

function openModal () {
    open.value = !open.value
}

</script>

<template>
        <div @click="openModal" class="card d-flex align-items-center">
            <i class="bi bi-info-circle-fill"></i>
            <img :src="cov" class="card-img-top" alt="...">
            <div class="card-body d-flex align-items-center">
                <h2 class="card-title">{{nom}}</h2>
                <!-- <p class="card-text" >Les langues utilisées sont : </p>
                <ul class="card-text">
                    <li v-for="x in langue">{{x}}</li>
                </ul >-->
            </div>
        </div>
        <div v-if="open" class="modal-overlay" @click="openModal"></div>
        <div v-if="open" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">{{ nom }}</h3>
                    <button @click="openModal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss">

.row.row-cols-auto.row-cols-md-2.g-4 {

    .col .modal {
        display: flex;
        width: max-content;
        height: max-content;
    }

    .col .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
    }
    .col .card {

        height: 100%;
        width: 100%;
        box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.10);
        border-radius: 30px;

        .bi.bi-info-circle-fill {
            display: none;
           
        } 


       .card-img-top {
            height: 69%;
            margin-top: 1%;
            width: 98%;
            border-radius: 30px 30px 0 0;
            object-fit: cover;
       }

       .card-body {
            height: 30%;
            .card-title, .card-text {
                font-size: 14px;
                margin: 0;
                text-align: center;
            }

        }
    }

   /*  A changer pour l'animation */
    .col .card:hover {
         .bi.bi-info-circle-fill {
            display: flex;
            position: absolute;
            top:5%;
            right:5%;
            font-size: 30px;
            color: grey;
        }
        .card-img-top {
            height: 98%;
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