<script setup>
// Avec scrip setup on met directement defineProps pour les data et on écrit nos fonctions

const props = defineProps([
'produit', 'product', 'cart'
])
import { ref } from 'vue'
const cart = ref (0);
// const msg = ref('test')
// function log()  {
//     console.log(msg)
// }


</script>

<template>
    
    <div class="card col-md-4 mb-5">
        <div>
            <!-- La valeur de la variable définie ici sera choisie dans App.vue -->
            <!-- Si ma variable est un objet comme user, je dois spécifier quelle valeur de mon objet j'appelle objet.variable-->
            <slot name="title">Titre de la carte par défaut</slot>
            <slot name="image">Image de la carte</slot>
            <slot name="ingredients">Liste des ingrédients par défaut</slot>
            <slot name="panier">Pas de variations possible</slot>
            <slot name ="stock">Stock ??</slot>
        </div>
    </div>

</template>

<style scoped>

</style>