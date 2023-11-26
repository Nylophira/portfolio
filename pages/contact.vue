<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const zero = ref("0%");

</script>
<template>
    <decor :couleur="jaune" :taille="zero" :larg="moitie"/>
    <div class="row">
        <div class="row">
            <div class="col">
                <Cv/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form>
                    <h2>N'hésitez pas à me contacter via ce formulaire</h2>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Adresse mail</label>
                    </div>
                    <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Objet" id="floatingTextarea">
                        <label for="floatingInput">Objet de votre message</label>
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Ecrire ici" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Votre message</label>
                    </div>
                    <!-- <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            En cochant cette case, j'accepte que mon email soit récolté afin de pouvoir recevoir une réponse à ma demande de contact. Ce dernier n'est pas stocké et sera supprimé à la fin de notre échange.
                        </label>
                    </div> -->
                    <div>
                        <button class="btn btn-primary" type="submit">Envoyer le formulaire</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>