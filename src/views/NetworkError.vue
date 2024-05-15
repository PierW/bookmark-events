<template>
    <div class="networkError">
      <h1>Uh-Oh!</h1>
  
      <h3>
        C'è un problema di connessione 
        <a href="#" @click="$router.go(-1)">clicca qui</a> per riprovare.
      </h3>
    </div>
</template>