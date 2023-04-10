<template>
  <navBar></navBar>
  <featuredGame></featuredGame>
  <recommendedGames></recommendedGames>
  <div>gjyhgjhg</div>
</template>

<script>
import navBar from "./components/Navbar.vue";
import recommendedGames from "./components/recommended.vue"
import featuredGame from "./components/featuredGame.vue";
export default {

  name: 'App',
  components: {
    navBar,
    recommendedGames,
    featuredGame
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
  background-color: rgb(237, 237, 237);
  height: auto;
}
</style>
