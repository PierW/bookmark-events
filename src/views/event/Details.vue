<script setup>
defineProps({
    event: { 
        required: true
    }
});

</script>

<template>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
</template>