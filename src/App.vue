<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
    @apply bg-gray-100; /* Если используете Tailwind CSS */
  margin: 0;
}


</style>

