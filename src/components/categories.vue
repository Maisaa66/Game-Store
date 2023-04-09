<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" :slidesPerView="6" :breakpoints="{
    '@0.00': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@1.00': {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    '@1.50': {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
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
  name: "categoriesSlider",
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
