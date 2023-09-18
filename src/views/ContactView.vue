<template>
    <div class="contact">
        <h1>This is a contact page</h1>
        <form action="" id="formContact">
            <section v-if="step === 1">
                <h3>Etape 1: votre nom</h3>
                <input type="text" name="name" id="name" placeholder="Entrer votre nom">
            </section>
            <section v-if="step === 2">
                <h3>Etape 2: vos coordonnées</h3>
                <input type="tel" name="phone" id="phone" placeholder="Entrer votre numéro de portable">
                <input type="email" name="mail" id="mail" placeholder="Entrer votre email">
            </section>
            <section v-if="step === 3">
                <h3>Etape 3: votre message</h3>
                <textarea name="message" id="message" placeholder="Entrer ici votre message"></textarea>
            </section><br/>
            <button @click="nextStep">Suivant</button>
            <button @click="previousStep">Précédent</button>
            <button @click="sendData">Envoyer</button>
        </form>

       
    </div>

</template>

<script setup>


import { ref } from 'vue';


const step = ref(1);
const nextStep = () => {
    step.value += 1;
    console.log(step);
}
const previousStep = () => {
    step.value -=1;
}
const sendData = () => {

}

</script>

<style>

</style>