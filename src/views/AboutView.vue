<script setup>

import { ref } from 'vue'

//import des components enfants
import Messages from '../components/Messages.vue'; 

// import des données initiales
import messages from '../Data/Messages.js'
// Utilisation de ref pour créer une copie réactive des messages importés
const allMessages = ref(messages);

</script>

<template>
  <div class="about">
    <h2>Les messages reçus</h2>
        <Messages
        v-for="(message, index) in allMessages" :key="index"  :message="message"/>
  </div>
</template>

<style>

</style>
