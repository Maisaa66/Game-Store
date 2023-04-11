<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper" :slidesPerView="6" :breakpoints="{
    '@0.00': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
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
    <swiper-slide v-for="genre in genres" :key="genre" :class="['btn', 'btn-outline-secondary', 'text-sm-nowrap', {'selected': selectedGenre === genre &&checked}]"
      @click="selectedGenre = genre, toggle()"> {{ genre }} <span v-if="selectedGenre === genre && checked"><svg
          class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round"
          stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="20 6 9 17 4 12" />
        </svg></span></swiper-slide>

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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "categoriesSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const genres = computed(() => store.getters.getCategories)
    const selectedGenre = ref("");
    const checked = ref(false);
    function toggle() {
      checked.value = !checked.value
    }
    return {
      modules: [Navigation],
      genres,
      selectedGenre,
      toggle,
      checked
    };
  },
};
</script>
<style lang="scss" scoped>
$primary : #572589;

.btn-outline-secondary {
  color: rgb(39, 39, 39);
  border: 1px solid;
  border-color: #434343;
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
  border-radius: 25px;


}

.selected{
  background-color: $primary;
  color: white;
}
</style>