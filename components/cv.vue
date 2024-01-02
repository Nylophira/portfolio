<template>
    <div>
        <a class="btn  btn-outline-danger px-5 mb-1" href="/Amandine_MILLET-CV.pdf" target="_blank" role="button">Télécharger mon CV</a>
    </div>
</template>

<style lang="scss">

.btn.btn-outline-danger {
    background-color: white;
    color: $rouge;
    border-color: $rouge ;
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 18px;
}

.btn.btn-outline-danger:hover {
    color: white;
    background-color: $rouge;
}

@media (max-width: 576px) {

    .btn.btn-outline-danger {
        font-size: 14px;
    }

}

</style>