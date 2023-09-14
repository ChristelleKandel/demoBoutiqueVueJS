<template>
    <div>
        <input v-model="searchTerm" @input="filterProducts" placeholder="Rechercher par nom ou ingrédients" class="w-100">
        <!--<input v-model="searchTerm" @input="filterIngredients" placeholder="Rechercher par ingrédients">-->
    </div>
</template>
  
<script>
//   export default {
//     data() {
//       return {
//         searchTerm: '', // Terme de recherche entré par l'utilisateur
//       };
//     },
//     methods: {
//       filterProducts() {
//         // Émettez un événement contenant le terme de recherche vers le composant parent
//         this.$emit('search', this.searchTerm);
//       },
//     },
//   };
</script>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(); //Définition et récupération de la fonction emit pour envoyer une fonction de l'enfant vers le parent

const searchTerm = ref('');

const filterProducts = () => {
  // Émettez un événement contenant le terme de recherche vers le composant parent
  emit('search', searchTerm.value);
};
</script>