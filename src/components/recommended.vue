<template>
    <div class="mt-5 m-auto shadow p-4 w-75">
        <p class="text-secondary banger-font">Most Recommended</p>
        <swiper :navigation="true" :modules="modules" class="mySwiper wrap " :slidesPerView="6" :breakpoints="{
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        '@1.50': {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }">

        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title banger-font-bold text-left">Card title</h5>
                    <p class="card-text banger-font-light">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary banger-font-light w-100">MORE INFO</a>
                </div>
            </div>
        </swiper-slide>

    </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper';

export default {
  name: "recommendedGames",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
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
.btn-primary{
    background-color:$primary;
    color: white;
    border-color: $primary;
    --bs-btn-color: #fff;
    --bs-btn-bg: $primary;
    --bs-btn-border-color: $primary;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #6c2fa9;
    --bs-btn-hover-border-color: #7131b0;
    --bs-btn-focus-shadow-rgb: 60,153,110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #572589;
    --bs-btn-active-border-color: #572589;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: $primary;
    --bs-btn-disabled-border-color: $primary;
}
</style>