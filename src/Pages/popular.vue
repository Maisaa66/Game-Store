<template>
    <div class="m-auto d-flex flex-wrap w-75 justify-content-center bg-white rounded shadow">
        <div v-for="game in popularGames" :key="game.id" class="m-3">
            <div class="card bg-transparent border border-0" style="width: 12rem;">
                <img :src="game.thumbnail" class="rounded" alt="...">
                <div class="card-body px-2">
                    <h5 class="card-title banger-font-bold text-left  "
                        style="font-size: 14px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{
                            game.title }}</h5>
                    <!-- <p class="card-text banger-font-light" style="font-size: 12px;">{{ game.short_description.length > 80 ? game.short_description.substring(0,80) + "....": game.short_description }}</p> -->
                    <button @click="showDetails(game.id)" class="btn btn-primary banger-font-light w-100 align-self-end">MORE
                        INFO</button>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
        export default {
            name:"recommendedPage",
            setup(){
                const store = useStore()
                let popularGames = computed(() => {
                // console.log(store.state.games);
                return store.getters.getPopularGames;
            })
    
            return{
                popularGames
            }
            }
        }
    </script>
    
    
    <style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600&display=swap");
    
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");
    $primary: #572589;
    
    .primary {
        color: $primary;
    }
    
    .bg-primary {
        background-color: $primary;
        color: white;
    }
    
    .banger-font-bold {
        font-family: "Anuphan", sans-serif;
        font-weight: 800;
    }
    
    .banger-font-light {
        font-family: "Anuphan", sans-serif;
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
    