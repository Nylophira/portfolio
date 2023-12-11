<script setup>

const jaune = ref("#F6AA1C");
const moitie = ref("50%");
const zero = ref("0%");

const mail = ref(null);
const objetM = ref(null);
const message = ref(null);


const invalideM = ref(false);

const envoyerEmail = async () => {

    //try {
        
        //const response = await fetch('/api/sendMail', {
         fetch('/api/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                objet: objetM.value,
                email: mail.value,
                message: message.value,
            }),
        })
        .then( nettoyage() )
        .catch(  console.error('Erreur lors de l\'envoi de l\'e-mail :', error) )
        

        
   //const data = await response.json();
   //console.log(data.message);
  //} catch (error) {
    //console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
  //} 
}

//verification des champs
function check (data, e) {
    const cibleID = e.target.id;
    const cible = document.getElementById(cibleID);

    if (cibleID == "mail") {
         //console.log("coucou !");
         let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
         if (regex.test(data)) {
            cible.classList.add("is-valid"); 
            cible.classList.remove("is-invalid");
         } else {
            cible.classList.add("is-invalid"); 
            cible.classList.remove("is-valid"); 
         }
    } else if ((data === null || data == "")) {
        
        cible.classList.add("is-invalid"); 
        cible.classList.remove("is-valid"); 
        
    } else {
         cible.classList.add("is-valid"); 
        cible.classList.remove("is-invalid");
    }
}

function nettoyage () {
    const contForm = document.getElementById("monForm").innerHTML = "";
    invalideM.value = true;
}   

</script>
<template>
    <div class="container d-flex justify-content-center align-items-center h-100">
    <decor :couleur="jaune" :taille="zero" :larg="moitie"/>
    <div class="row d-flex align-items-center flex-column w-100" id="contContact" :class="invalideM ? 'justify-content-center':'justify-content-around'">
        <h2 class="text-center p-3" v-if="invalideM"> Message envoyé, merci !</h2>
        <div class="row">
            <div class="col d-flex flex-column align-items-center">
                <Cv/>
            </div>
        </div>
        <div class="row" id="contFormC">
            <div id="monForm" class="col h-100">
                    <form  class="p-3 p-sm-5 d-flex align-items-center flex-column" @submit.prevent="envoyerEmail">
                        <!-- <h2 class="fs-4 pb-3">Formulaire de contact</h2> -->
                    <div class="w-100 d-flex flex-column flex-md-row mb-3 justify-content-between" id="champMailOb">
                        <div class="form-floating my-md-0 my-3">
                            <input v-model="mail" type="email" class="form-control" id="mail" placeholder="name@example.com" name="mail" required @blur="check(mail, $event)">
                            <label for="mail">Adresse mail</label>
                            <div class="invalid-feedback">
                                S'il vous plait, veuillez écrire une adresse mail valide.
                            </div>
                            <div class="valid-feedback">
                                Cela semble être bon.
                            </div>
                        </div>
                        <div class="form-floating">
                            <input v-model="objetM" type="text" class="form-control" placeholder="Objet" id="objetM" name="objet" required @blur="check(objetM, $event)">
                            <label for="objetM">Objet du message</label>
                            <div class="invalid-feedback">
                                S'il vous plait, veuillez écrire l'objet de votre message.
                            </div>
                            <div class="valid-feedback">
                                Merci !
                            </div>
                        </div>
                    </div>
                    <div class="form-floating mb-3 w-100">
                        <textarea v-model="message" class="form-control" placeholder="Ecrire ici" id="message" name="message" required @blur="check(message, $event)"></textarea>
                        <label for="message">Votre message</label>
                        <div class="invalid-feedback">
                                S'il vous plait, veuillez écrire votre message.
                        </div>
                        <div class="valid-feedback">
                                Merci !
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-outline px-4" type="submit">Envoyer le formulaire</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
</template>

<style lang="scss">


#contContact {
    height: 90%;

    #contFormC  {

        width: 70%;
       

        .col.h-100 {

            form {
                background-color: white;
                border: $jaune solid 1px;
                border-radius: 20px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            }
            
            #champMailOb .form-floating {
                width: 40%;

                input {
                    border: $jaune 1px solid;
                }
                
            }

        }

        .form-floating textarea {
            height: 150px;
            border: $jaune 1px solid;
        }

        .btn.btn-outline {
            color: $jaune;
            border-color: $jaune ;
            border-radius: 30px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 20px;
        }

        .btn.btn-outline:hover {
            color: white;
            background-color: $jaune;
        }

        .form-floating label::after {
            position: relative;
        }
    }
}

@media (max-width: 992px) {
    #contContact #contFormC {
    
        width: 80%;

        .col.h-100  form #champMailOb .form-floating {
            width: 100%;
        }
    
    }
}

@media (max-width: 576px) {
    #contContact #contFormC .btn.btn-outline {
            font-size: 16px;
        }
    
}


</style>