<template>
  <navBar></navBar>
  <recommendedGames></recommendedGames>
</template>

<script>
import navBar from "./components/Navbar.vue";
import recommendedGames from "./components/recommended.vue"
export default {

  name: 'App',
  components: {
    navBar,
    recommendedGames
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: rgb(180, 128, 128);
}
</style>
