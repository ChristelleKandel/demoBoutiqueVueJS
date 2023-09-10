<script setup>

import Cards from './Cards.vue'
import { reactive, ref } from 'vue'
const product = ref('chocolat')
const produits = reactive([
    {
        name: 'tarte',
        image: 'src/assets/images/tarte.jpg',
        inventory: 8,
        ingredients: ['oeufs', 'chocolat', 'farine', 'crème fraîche'],
    },
    {
        name: 'Gâteau' ,
        image: 'src/assets/images/gateau.jpg',
        inventory: 12,
        ingredients: ['oeufs', 'chocolat', 'farine', 'beurre'],
    },
    {
        name: 'Muffins',
        image: 'src/assets/images/muffins.jpg',
        inventory: 0,
        ingredients: ['oeufs', 'chocolat', 'farine', 'crème fraîche'],
    },

])
const cart = ref (0);

</script>

<template>
    <h2 class="text-center">Les desserts chocolatés</h2>
    <div class="row container m-3 m-auto ">
        <!-- Je fais une boucle avec 3 cards plutôt que de répéter 3 fois ma card 
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        <ChocolatsCard :product="product" :produit="produit" :cart="cart" />
        -->
        <Cards v-for="produit in produits" :product="product" :produit="produit" >
          
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
                <button class="btn" @click="cart +=1">Ajouter au panier</button>
                <div class="cart">Panier: ({{ cart }})</div>
            </div>
          </template>

          <template v-slot:stock>
            <h4>Le stock</h4>
            <p v-if="produit.inventory > 10">Stock OK</p>
            <p v-else-if="produit.inventory <= 10 && produit.inventory > 0">Presque en rupture!</p>
            <p v-else>Trop tard!</p>
          </template>

        </Cards>
    </div>


</template>

<style scoped>

</style>