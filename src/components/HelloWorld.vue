<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green text-center">{{ msg }}</h1>
  </div>
</template>

<!-- scoped signifie que ce script ne sera valable que pour ce component -->
<style scoped>

</style>
