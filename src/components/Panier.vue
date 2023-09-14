<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

// Propriétés
const { title, products } = defineProps(['title', 'products']);

// Événements emit utilisée depuis le component Enfant pour émettre un event
// emit est utilisé dans une fonction avec ("nom de l'event", valeur facultative à émettre)
//  la fonction répondant à l'event "nom de l'event" sera définie dans le parent,  HomeView.vue pour nous ici
const emit = defineEmits();

// Méthode pour incrémenter la quantité d'un produit
const incrementQuantity = (product) => {
    if(product.quantity < product.inventory){
    product.quantity += 1;
    emit('update:products', products); // Émettre l'événement pour mettre à jour les quantités dans le parent 
    }
};
// Méthode pour décrémenter la quantité d'un produit
const decrementQuantity = (product) => {
    if(product.quantity > 0){
    product.quantity -= 1;
    emit('update:products', products); 
    }
};

const cartTotal = computed(() => {
    return products.reduce((cartTotal, product) => {
        return cartTotal + product.price * product.quantity;
    }, 0);
});

</script>

<template>
    <div>
      <h1>{{ title }}</h1>
      <table>
        <thead>
            <tr>
                <th>Produit</th>
                <th>Prix unitaire</th>
                <th>Quantité</th>
                <!--<th>Total</th> -->
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in products" :key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.price.toFixed(2) }}€</td>
                <td>
                {{ product.quantity }} <br/>
                <button @click="incrementQuantity(product)">+1</button>
                <button @click="decrementQuantity(product)">-1</button>
                </td>
                <!--<td>{{ (product.price * product.quantity).toFixed(2) }}</td>-->
            </tr>
        </tbody>
      </table>
      <p>Total du panier : {{ cartTotal.toFixed(2) }}</p>
    </div>
  </template>
  