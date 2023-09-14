<template>
  <main class="container w-auto">
    <div class="row">
      <div class="col-md-3">
        <!-- Ici on ajoute l'utilisation de l'event @update:products émise (emit) par l'enfant Panier et on lui attribue une fonction définie dans script-->
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

<script setup>
import { ref, computed } from 'vue'
import PatisserieRow from '../components/PatisserieRow.vue'
import Panier from '../components/Panier.vue'


// import des données initiales
import chocolats from '../Data/Chocolats.js'; // Import des produits depuis Products.js
import fruits from '../Data/Fruits.js'; // Import des produits depuis Products.js

// Utilisation de ref pour créer une copie réactive des produits importés
const importedChocolats = ref(chocolats);
const importedFruits = ref(fruits);

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
  return totalChocolat.value + totalFruits.value; // Ajoutez tous les totaux de tous les products à la main
});

// Méthodes pour mettre à jour la quantité des produits dans les paniers
const updateCartChocolat = (newProducts) => {
  importedChocolats.value = newProducts;
  // updateGlobalTotal(); // Mettez à jour globalTotal à chaque mise à jour du panier
};
const updateCartFruits = (newProducts) => {
  importedFruits.value = newProducts;
  // updateGlobalTotal(); // Mettez à jour globalTotal à chaque mise à jour du panier
};

// On aurait pu faire un Calcul automatique de globalTotal en utilisant une boucle while
// const updateGlobalTotal = () => {
//   let total = 0;

//   // Ajoutez ici tous les totaux individuels des paniers que vous avez
//   const cartTotals = [totalChocolat.value, totalFruits.value];

//   let i = 0;
//   while (i < cartTotals.length) {
//     total += cartTotals[i];
//     i++;
//   }

//   globalTotal.value = total;
// };

// Initialisation de globalTotal
// const globalTotal = ref(0);
// updateGlobalTotal(); // Calcul initial de globalTotal


</script>