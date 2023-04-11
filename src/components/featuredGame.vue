<template>
    <div class="card mb-3 m-auto w-75">
        <div class="row no-gutters">
            <div class="col-md-7">
                <img :src="game.thumbnail" class="card-img" alt="..." />
            </div>
            <div class="col-md-4 m-auto">
                <h3 class="card-title banger-font-bold">{{ game.title }}</h3>
                <h5 class="card-text banger-font-bold" style="font-size: 15px">
                    {{ game.genre }}
                </h5>
                <p class="card-text banger-font-light"
                    style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
                    {{ game.short_description }}
                </p>
                <p class="card-text">
                    <small class="text-body-secondary">300k Downloads</small>
                </p>
                <button @click="gotoDetail(game.id)" class="btn btn-primary w-100">
                    MORE INFO
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
    name: "featuredGame",
    setup() {
        const store = useStore();
        const router = useRouter();
        const game = computed(() => store.getters.getGame);
        function gotoDetail(id) {
            router.push(`/details/${id}`);
        }
        return {
            game,
            gotoDetail,
        };
    },
};
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
