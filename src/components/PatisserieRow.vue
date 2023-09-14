<script setup>

//Exemple de script où les données sont récupérées dans des fichiers .js

// importation des autres components
import Cards from './Cards.vue'
import SearchBar from '../components/SearchBar.vue'

// import général des utilitaires de vue
import { ref, watch } from 'vue'

// import des données initiales
import chocolats from '../Chocolats.js'; // Import des produits depuis Products.js
import fruits from '../Fruits.js'; // Import des produits depuis Products.js
// import { chocolats } from '../Chocolats.js'; // Import des produits depuis Products.js
// import { fruits } from '../Fruits.js'; // Import des produits depuis Products.js
// Utilisation de ref pour créer une copie réactive des produits importés
const importedChocolats = ref(chocolats);
const importedFruits = ref(fruits);
// const importedChocolats = ref([...chocolats]);
// const importedFruits = ref([...fruits]);

//Fusion de tous les produits dans un seul et même tableau pour faire des recherches dans tous
const allProducts = [...chocolats, ...fruits];
//Je crée ma variable dans laquelle filtrer
const filteredProducts = ref(allProducts);
const ingredientsFiltered = ref(allProducts);
//Initialisation de SearchTerm
const searchTerm = ref('');
//Création de la function de recherche à partir de SearchTerm défini dans le component SearchBar
const updateSearchTerm = (newSearchTerm) => {
  searchTerm.value = newSearchTerm;
};

// Fonction de filtrage des produits par nom
const nameFilterProducts = () => {
  filteredProducts.value = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
};

// Fonction de filtrage des produits par ingrédients
const ingredientsFilterProducts = () => {
  ingredientsFiltered.value = allProducts.filter(product =>
    product.ingredients.some(ingredient =>
    ingredient.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  );
};

// Utilisez un watcher pour détecter les changements de searchTerm et lancer le filtre par nom
watch(searchTerm, nameFilterProducts);
watch(searchTerm, ingredientsFilterProducts);

// Appelez la fonction de filtrage initiale
nameFilterProducts();
ingredientsFilterProducts();

</script>

<template>
    <!-- Barre de recherche d'un produit -->
    <div class="bg-light p-2">
      <SearchBar @search="updateSearchTerm" />
    </div>

    <!-- Div rendue seulement si un mot est tapé dans la barre de recherche-->
    <div v-if="searchTerm != ''">
    <h2 class="text-center">Les desserts contenant votre recherche dans leur nom</h2>
      <!-- Si un résultat existe -->
      <div v-if="filteredProducts.length > 0" class="row">
        <Cards 
          v-for="produit in filteredProducts" :key="produit.id" 
          :produit="produit" 
          />
          <!-- Sinon -->
      </div>
      <div v-else>
        <p>Pas de résultats</p>
      </div>
    </div>

    <!-- Div rendue seulement si un ingrédient est tapé dans la barre de recherche-->
    <div v-if="searchTerm != ''">
    <h2 class="text-center">Les desserts contenant votre recherche dans les ingrédients</h2>
      <!-- Si un résultat existe -->
      <div v-if="ingredientsFiltered.length > 0" class="row">
        <Cards 
          v-for="produit in ingredientsFiltered" :key="produit.id" 
          :produit="produit" 
          />
          <!-- Sinon -->
      </div>
      <div v-else>
        <p>Pas de résultats</p>
      </div>
    </div>

    <h1 class="text-center text-green">La boutique des gourmands</h1>
    <!-- Sinon toutes les div -->
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