<script setup>

//Exemple de script où les données sont récupérées dans des fichiers .js

// importation des autres components
import Cards from './Cards.vue'

// import général des utilitaires de vue
import { ref, computed } from 'vue'

// import des données initiales
import { chocolats } from '../Chocolats.js'; // Import des produits depuis Products.js
import { fruits } from '../Fruits.js'; // Import des produits depuis Products.js
// Utilisation de ref pour créer une copie réactive des produits importés
const importedChocolats = ref([...chocolats]);
const importedFruits = ref([...fruits]);

</script>

<template>
    <h2 class="text-center">Les desserts au chocolat</h2>
    <div class="row container m-3 m-auto ">
      <Cards 
        v-for="(produit, index) in importedChocolats" :key="index" 
        :produit="produit" 
        />
    </div>
    <h2 class="text-center">Les desserts aux fruits</h2>
    <div class="row container m-3 m-auto ">
      <Cards 
        v-for="(produit, index) in importedFruits" :key="index" 
        :produit="produit" 
        />
    </div>

</template>

<style scoped>

</style>