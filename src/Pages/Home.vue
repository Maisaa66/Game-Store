<template>
<featuredGame></featuredGame>
<recommendedGames></recommendedGames>
<popularGames></popularGames>
</template>

<script>
import recommendedGames from '../components/recommended.vue';
import popularGames from '../components/popular.vue';
import featuredGame from '../components/featuredGame.vue';
    export default {
        name:"homePage",
        components:{
        recommendedGames,
        popularGames,
        featuredGame
        }
    }
</script>

<style scoped>

</style>