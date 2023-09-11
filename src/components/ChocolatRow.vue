<script setup>
// Exemple de script où les données sont définis dans la même page

import Cards from './Cards.vue'
import { ref, computed } from 'vue'

// Données initiales
const product = ref('chocolat')
const produits = ref([
    {
        name: 'tarte',
        image: 'src/assets/images/tarte.jpg',
        inventory: 8,
        ingredients: ['oeufs', 'chocolat', 'farine', 'crème fraîche'],
        price: 6.99,
        quantity: 1
    },
    {
        name: 'Gâteau' ,
        image: 'src/assets/images/gateau.jpg',
        inventory: 12,
        ingredients: ['oeufs', 'chocolat', 'fécule de maïs', 'beurre'],
        price: 10.50,
        quantity: 2
    },
    {
        name: 'Muffins',
        image: 'src/assets/images/muffins.jpg',
        inventory: 0,
        ingredients: ['oeufs', 'chocolat', 'poudre d\'amamnde', 'crème fraîche'],
        price: 4.90,
        quantity: 3
    },

])

// Calcul du total du panier
const TotalCart = computed(() => {
  const unformattedTotal = produits.value.reduce((TotalCart, produit) => {
    return (TotalCart + produit.price * produit.quantity);
  }, 0);
  return unformattedTotal // On ne le formate pas ici si on le formate dans le template
  // return unformattedTotal.toFixed(2); // Formatage avec 2 chiffres après la virgule
});

// Fonction pour augmenter la quantité d'un produit
const incrementQuantity = (produit) => {
  produit.quantity += 1;
};
// Fonction pourdiminuer la quantité d'un produit
const decrementQuantity = (produit) => {
  produit.quantity -= 1;
};

</script>

<template>
    <h2 class="text-center">Les desserts au  {{ product }}</h2>
    <div class="row container m-3 m-auto ">
        <!--Création de card pour afficher chaque produit de produits[]-->
        <Cards 
        v-for="(produit, index) in produits" :key="index" 
        :produit="produit" 
        >
          
          <template v-slot:title>
          </template>

          <template v-slot:image>
          </template>

          <template v-slot:ingredients>
          </template>

          <template v-slot:panier>
          </template>

          <template v-slot:stock>
          </template>

        </Cards>

        <div class="shopping-cart">
          <div class="cart">Total du panier: {{ TotalCart.toFixed(2) }} €</div> <!-- Formatage du total du panier -->
        </div>

    </div>


</template>

<style scoped>

</style>