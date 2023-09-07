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
    
    <div class="card col-md-4 ">
        <div>
            <!-- La valeur de la variable définie ici sera choisie dans App.vue -->
            <!-- Si ma variable est un objet comme user, je dois spécifier quelle valeur de mon objet j'appelle objet.variable-->
            <h3>{{ produit.nom }}</h3>
            <!-- v-bind:href ou v-bind:src peuvent être abrégés avec juste : , tout comme @click est un abrégé de v-on:click-->
            <a :href="produit.photo" target="_blank"><img alt="photo de {{ produit.nom }}" class="photo" :src="produit.photo"></a>

            <!-- Faire une liste depuis un tableau-->
            <h3>Ingrédients</h3>
            <ul>
                <li v-for="ingredient in produit.ingredients">{{ ingredient }}</li>
            </ul>
            <!-- liée une variation d'un objet à son idée avec v-bind:key-->
            <h4>Les différentes options de chocolat</h4>
            <div v-for="variant in produit.variantes" :key="variant.id">
                - {{ variant.color }} - <button class="btn" @click="cart +=1">Ajouter au panier</button>
                <!--ajout dans le panier directement v-on:click-->
                <!--Ajout d'une méthode
                <button class="btn" @click="log">{{ msg }}</button>-->
            </div>
            <div class="cart">Panier: ({{ cart }})</div>

            <h4>Le stock</h4>
            <!-- Montre l'un ou l'autre des événements selon que la valeur de la variable est true ou false-->
            <!-- <p v-if="produit.inStock">En stock</p>
            <p v-else>En rupture</p> -->
            <!-- N'apparait que si la valeur de la variable est true-->
            <!-- <p v-show="produit.quantiteLimitee">Quantité limitée</p> -->
            <!--Affichage en fonction d'une variable-->
            <p v-if="produit.inventory > 10">Stock OK</p>
            <p v-else-if="produit.inventory <= 10 && produit.inventory > 0">Presque en rupture!</p>
            <p v-else>Trop tard!</p>

        </div>
    </div>

</template>

<style scoped>

</style>