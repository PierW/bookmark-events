<script setup>

defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
});

</script>

<template>
    <h1>Oops!</h1>
    <h3>{{ resource === 'page' ? 'La pagina' : 'L\'evento'}} che stai cercando non si trova qui.</h3>
    <router-link :to="{ name: 'event-list' }">Torna alla homepage.</router-link>
</template>