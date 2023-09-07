<script setup>

import Cards from './Cards.vue'
import { reactive, ref } from 'vue'
const product = ref('chocolat')
const produit = reactive({
  nom: 'tarte',
  photo: 'src/assets/images/tarte.jpg',
  inStock: true,
  quantiteLimitee: true,
  inventory: 8,
  ingredients: ['oeufs', 'chocolat', 'farine', 'crème fraîche'],
  variantes: [
    {id: 10, color: 'noir'},
    {id: 11, color: 'lait'},
    {id: 12, color: 'blanc'}
  ],
  cart: 0
})
// fonction display pour envoyer la définition de la propriété produit dans l'élément enfant : le component Chocolat.vue
// const display = () => {
//   console.log(produit, cart)
// }
</script>

<template>
    <h2 class="text-center">Les desserts chocolatés</h2>
    <div class="row container m-3 m-auto ">
        <!-- Je fais une boucle avec 3 cards plutôt que de répéter 3 fois ma card 
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        -->
        <Cards v-for="(card, index) in 3" :key="index" :product="product" :produit="produit" >
          
          <template v-slot:title>
            <h3>{{ produit.nom }}</h3>
          </template>

          <template v-slot:image>
            <!-- v-bind:href ou v-bind:src peuvent être abrégés avec juste : , tout comme @click est un abrégé de v-on:click-->
            <a :href="produit.photo" target="_blank"><img alt="photo de {{ produit.nom }}" class="w-100" :src="produit.photo"></a>
          </template>

          <template v-slot:ingredients>
            <!-- Faire une liste depuis un tableau-->
            <h3>Ingrédients</h3>
            <ul>
                <li v-for="ingredient in produit.ingredients">{{ ingredient }}</li>
            </ul>
          </template>

          <template v-slot:variants>
            <!-- liée une variation d'un objet à son idée avec v-bind:key-->
            <h4>Les différentes options de chocolat</h4>
            <div v-for="variant in produit.variantes" :key="variant.id">
                - {{ variant.color }} - <button class="btn" @click="produit.cart +=1">Ajouter au panier</button>
                <!--ajout dans le panier directement v-on:click-->
                <!--Ajout d'une méthode
                <button class="btn" @click="log">{{ msg }}</button>-->
            
                <div class="cart">Panier: ({{ produit.cart }})</div>
            </div>
          </template>

          <template v-slot:stock>
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
          </template>

        </Cards>
    </div>


</template>

<style scoped>

</style>