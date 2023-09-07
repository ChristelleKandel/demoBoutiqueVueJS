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
  ]
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
        <Cards v-for="(card, index) in 3" :key="index" :product="product" :produit="produit" />
    </div>
    <h2 class="text-center">Les desserts fruités</h2>
    <div class="row container m-3 m-auto ">
        <Cards v-for="(card, index) in 3" :key="index" :product="product" :produit="produit" />
    </div>

</template>

<style scoped>

</style>