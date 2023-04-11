<template>

        <div class="mb-3">
        <div class="m-auto shadow bg-white w-75 rounded">
        <div class="row rounded">
            <img :src="game.thumbnail" class="img-fluid rounded" style="width: 100%; height: 300px;">
        </div>

    </div>

    <div class="m-auto shadow bg-white w-75 rounded mt-2 p-3">
        <div class="row">
            <div class="col-11 d-flex">
                <p class="banger-font-bold fs-2">{{ game.title }}</p>
                <a :href="game.game_url" target="_blank"> <svg class="feather feather-link my-2 me-2" fill="none"
                        height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg></a>
            </div>

            <p class="banger-font-light"><span class="banger-font-bold fs-5">Genre:</span> {{ game.genre }}</p>
            <p class="banger-font-light"><span class="banger-font-bold fs-5">Description:</span> {{ game.short_description
            }}</p>
            <p class="banger-font-light"><span class="banger-font-bold fs-5">Publisher:</span> {{ game.publisher }}</p>
            <p class="banger-font-light"><span class="banger-font-bold fs-5">Release date:</span> {{ game.release_date }}
            </p>
        </div>
    </div>
    </div>
  
        <recommendedGames></recommendedGames>
    
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import recommendedGames from '../components/recommended.vue';
export default {
    name: "gameDetail",
    components:{
        recommendedGames
    },
    setup() {

        const store = useStore();
        const route = useRoute()
        let gameId = route.params.id;
        store.dispatch('getGame', gameId);
        let game = computed(() => store.state.game)

        onMounted(() => {
            console.log(game)
        })

        return {
            game
        }
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
$primary : #572589;

.primary {
    color: $primary;
}

.bg-primary {
    background-color: $primary;
    color: white;
}

.banger-font-bold {
    font-family: 'Anuphan', sans-serif;
    font-weight: 800;
}

.banger-font-light {
    font-family: 'Anuphan', sans-serif;
    font-weight: 400;
}

.btn-primary {
    background-color: $primary;
    color: white;
    border-color: $primary;
    --bs-btn-color: #fff;
    --bs-btn-bg: $primary;
    --bs-btn-border-color: $primary;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #6c2fa9;
    --bs-btn-hover-border-color: #7131b0;
    --bs-btn-focus-shadow-rgb: 60, 153, 110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #572589;
    --bs-btn-active-border-color: #572589;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: $primary;
    --bs-btn-disabled-border-color: $primary;
}
</style>