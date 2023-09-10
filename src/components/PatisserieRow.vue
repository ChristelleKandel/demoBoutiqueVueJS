<script setup>

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
        <!-- Je fais une boucle avec 3 cards plutôt que de répéter 3 fois ma card 
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        -->
        <Cards 
        v-for="(produit, index) in produits" :key="index" 
        :produit="produit" 
        >
          
          <template v-slot:title>
            <h3>{{ produit.name }}</h3>
          </template>

          <template v-slot:image>
            <!-- v-bind:href ou v-bind:src peuvent être abrégés avec juste : , tout comme @click est un abrégé de v-on:click-->
            <a :href="produit.image" target="_blank"><img alt="photo de {{ produit.nom }}" class="w-100" :src="produit.image"></a>
          </template>

          <template v-slot:ingredients>
            <!-- Faire une liste depuis un tableau-->
            <h3>Ingrédients</h3>
            <ul>
                <li v-for="ingredient in produit.ingredients">{{ ingredient }}</li>
            </ul>
          </template>

          <template v-slot:panier>
            <div>
              <ul>
                <li>{{ produit.price.toFixed(2) }} €</li> <!-- Formatage du prix unitaire -->
                <li>Quantité au panier : {{ produit.quantity }}</li>
                <li>Total = {{ (produit.price * produit.quantity).toFixed(2) }}</li>  <!-- Formatage du total individuel -->
              </ul>
                <button class="btn" @click="incrementQuantity(produit)">Ajouter</button>
                <button class="btn" @click="decrementQuantity(produit)">Retirer</button>
            </div>
          </template>

          <template v-slot:stock>
            <h4>Le stock</h4>
            <p v-if="produit.inventory > 10">Stock OK</p>
            <p v-else-if="produit.inventory <= 10 && produit.inventory > 0">Presque en rupture!</p>
            <p v-else>Trop tard!</p>
          </template>

        </Cards>

        <div class="shopping-cart">
          <div class="cart">Total du panier: {{ TotalCart.toFixed(2) }} €</div> <!-- Formatage du total du panier -->
        </div>

    </div>


</template>

<style scoped>

</style>