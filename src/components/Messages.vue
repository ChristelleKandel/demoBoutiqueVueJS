<template>
    <div>
        <h4>{{ message.title}}</h4>
        <p>{{ message.message }}</p>
    </div>
</template>

<script setup>
const props = defineProps([
'message'
])

</script>