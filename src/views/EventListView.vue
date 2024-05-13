<script setup>
  import { ref, onMounted, computed, watchEffect } from 'vue';
  import EventService from '@/services/EventService.js';
  import EventCard from '@/components/EventCard.vue';

  const events = ref(null);
  const totalEvents = ref(0);
  const props = defineProps(['page']);
  const page = computed(() => props.page);
  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvents.value / 2);
    return page.value < totalPages
  });

  onMounted(() =>{
    watchEffect(() => {
      // Crea una piccola latenza per far capire all'utente che abbiamo nuovi dati.
      events.value = null;
      EventService.getEvents(2, page.value)
      .then((response)=>{
        events.value = response.data;
        totalEvents.value = response.headers['x-total-count'];
      })
      .catch((error)=>{
        console.log(error);
      })
    });
  });

</script>

<template>
  <h1>Lista Eventi</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id"  :event="event"/>

    <div class="pagination">
      <RouterLink id="page-prev" :to="{name: 'event-list', query: {page : page-1}}" rel="prev" v-if="page !=1">&#60; Prev</RouterLink>
      <template v-for="page in Math.ceil(totalEvents / 2)" :key="page">
        <RouterLink :to="{name: 'event-list', query: {page : page}}" :rel="`page-${page}`">{{ page }}</RouterLink>
      </template>
      <RouterLink id="page-next" :to="{name: 'event-list', query: {page : page+1}}" rel="next" v-if="hasNextPage">Next &#62;</RouterLink>
    </div>

  </div>
</template>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination{
  display: flex;
  width: 290px;
}

.pagination a{
  flex: 1;
  text-decoration: none;
  color: rgb(181, 122, 13);
}

#page-prev{
  text-align: left;
}

#page-next{
  text-align: right;
}
</style>
