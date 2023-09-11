<script setup>
import { useStore } from 'vuex';
const props = defineProps([
'count'
])
const store = useStore();

const count = store.state.count;
const doubleCount = store.getters.doubleCount;

const increment = () => {
    store.commit('increment');
};

const decrement = () => {
    store.commit('decrement');
};

const incrementAsync = () => {
    setTimeout(() => {
        store.commit('increment');
    }, 2000);
};
</script>

<template>
    <div>
        <p>Count: {{ count }}</p>
        <p>Double Count: {{ doubleCount }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="incrementAsync">Increment Async</button>
    </div>
  </template>