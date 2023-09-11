<script setup>
import { ref, computed } from 'vue'
import PatisserieRow from '../components/PatisserieRow.vue'
import Panier from '../components/Panier.vue'

// import des données initiales
import { chocolats } from '../Chocolats.js'; // Import des produits depuis Products.js
import { fruits } from '../Fruits.js'; // Import des produits depuis Products.js
// Utilisation de ref pour créer une copie réactive des produits importés
const importedChocolats = ref([...chocolats]);
const importedFruits = ref([...fruits]);

// Calcul du total du panier pour chocolats.js
const totalChocolat = computed(() => {
  return importedChocolats.value.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0); 
});

// Calcul du total du panier pour fruits.js
const totalFruits = computed(() => {
  return importedFruits.value.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0); 
});

// Calcul du total global
const globalTotal = computed(() => {
  return totalChocolat.value + totalFruits.value; // Ajoutez d'autres totaux ici pour les autres paniers si nécessaire
});

// Méthodes pour mettre à jour la quantité des produits dans les paniers
const updateCartChocolat = (newProducts) => {
  importedChocolats.value = newProducts;
};
const updateCartFruits = (newProducts) => {
  importedFruits.value = newProducts;
};


</script>

<template>
  <main class="container w-auto">
    <h1 class="text-center">La boutique des gourmands</h1>
    <div class="row">
      <div class="col-md-3">
        <Panier title="Chocolats" :products="importedChocolats" :total="totalChocolat" @update:products="updateCartChocolat" />
        <Panier title="Fruits" :products="importedFruits" :total="totalFruits" @update:products="updateCartFruits" />
        <h3>Total global du panier</h3>
        <p>Total global : {{ globalTotal.toFixed(2) }}</p>
      </div>
      <div class="col-md-9">
        <PatisserieRow />
      </div>
    </div>
  </main>
</template>
