<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper wrap mt-5" :slidesPerView="6" :breakpoints="{
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
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card bg-transparent border border-0" style="width: 13rem;">
                <img src="../../public/Images/greece.jpg" class="rounded" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
    </swiper>
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

</style>