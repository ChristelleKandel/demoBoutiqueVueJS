<script setup>
// Avec scrip setup on met directement defineProps pour les data et on écrit nos fonctions

const props = defineProps([
'produit'
])

// Fonction pour augmenter la quantité d'un produit
const incrementQuantity = (produit) => {
  produit.quantity += 1;
};
// Fonction pour diminuer la quantité d'un produit
const decrementQuantity = (produit) => {
  produit.quantity -= 1;
};

</script>

<template>
    
    <div class="card col-md-4 mb-5">
        <div>
            <!-- La valeur de la variable définie ici sera choisie dans App.vue -->
            <!-- Si ma variable est un objet comme user, je dois spécifier quelle valeur de mon objet j'appelle objet.variable-->
            <slot name="title">
                <h3>{{ produit.name }}</h3>
            </slot>
            <slot name="image">
                <a :href="produit.image" target="_blank"><img alt="photo de {{ produit.nom }}" class="w-100" :src="produit.image"></a>
            </slot>
            <slot name="ingredients">
                <!-- Faire une liste depuis un array-->
            <h3>Ingrédients</h3>
            <ul>
                <li v-for="ingredient in produit.ingredients">{{ ingredient }}</li>
            </ul>
            </slot>
            <slot name="panier">
                <div>
              <ul>
                <li>{{ produit.price.toFixed(2) }} €</li> <!-- Formatage du prix unitaire -->
                <li>Quantité au panier : {{ produit.quantity }}</li>
                <li>Total = {{ (produit.price * produit.quantity).toFixed(2) }}</li>  <!-- Formatage du total individuel -->
              </ul>
                <button class="btn" @click="incrementQuantity(produit)">Ajouter</button>
                <button class="btn" @click="decrementQuantity(produit)">Retirer</button>
            </div>
            </slot>
            <slot name ="stock">
            <p v-if="produit.inventory > 10">Stock OK</p>
            <p v-else-if="produit.inventory <= 10 && produit.inventory > 0">Presque en rupture!</p>
            <p v-else>Trop tard!</p>
            </slot>
        </div>
    </div>

</template>

<style scoped>

</style>