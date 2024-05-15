<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue';

const router = useRouter();
const GStore = inject('GStore');

const { event } = defineProps({
    event: { 
        required: true
    }
});

const register = () => {
  // Call to API
  // If registered then redirect to event details
  GStore.flashMessage = "Ti sei registrato corretamente per " + event.title;
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000);
  router.push( {
    name: 'event-details'
  })
}
</script>

<template>
    <p>Registra per evento</p>
    <button @click="register">Registrami!</button>
</template>