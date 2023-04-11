<template>
<div class="d-flex flex-nowrap">
    <div v-for="game in allGames" :key="game.id">
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
import { ref } from 'vue'
import { useRoute } from 'vue-router';
export default {
    name: "displayAll",
    setup(){
        const route = useRoute();
        let allGames = ref([]);
        allGames.value = route.query.gamesData

        return{
            allGames
        }
    }
}
</script>

<style lang="scss" scoped></style>