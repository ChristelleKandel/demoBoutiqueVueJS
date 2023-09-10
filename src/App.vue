<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const today = new Date()
const currentYear = today.getFullYear()
import { computed } from 'vue'
const copyright = computed(() => {
  return `Copyright ${currentYear}`;
})
</script>

<template>
  <header class="container">
    <img alt="Vue logo" class="logo" src="@/assets/logo.jpg" width="125" height="125" />

    <div>
      <HelloWorld msg="Notre demo de boutique en Vue.js" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="text-center bg-light"> 
		<p>{{ copyright }}</p>
  </footer>
</template>

<style scoped>


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

  .logo {
    margin: 0 2rem 0 0;
  }
</style>
