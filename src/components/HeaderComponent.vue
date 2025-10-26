
<script setup>
import { ref } from 'vue'
import ImageComponent from './ImageComponent.vue';
import NameHeading from './NameHeading.vue';
import MainimageSrc from '../assets/image/aboutusimg-removebg-preview (1).png'; // Image import

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


// Refs for progress elements
const progressCircle = ref(null)
const progressContent = ref(null)

// Autoplay callback function
const onAutoplayTimeLeft = (swiper, time, progress) => {
  if (progressCircle.value) {
    progressCircle.value.style.setProperty('--progress', 1 - progress)
  }
  if (progressContent.value) {
    progressContent.value.textContent = `${Math.ceil(time / 1000)}s`
  }
}

// Swiper modules to pass as prop
const modules = [Autoplay, Pagination, Navigation]

defineProps({
  home: String,
  about: String,
  resume: String,
  skills: String,
  projects: String,
  contact: String
});

</script>

<template>
  
<section class="w-full" >
<nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 fixed top-0 left-0 w-full z-50" style="background-color: #101010;">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-yellow-500"><A>AIMAN SAJJAD</A></span>
    </a>

    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">

      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700" style="background-color: #101010;">
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-white bg-yellow-700 rounded-sm md:bg-transparent md:text-yellow-700 md:dark:text-yellow-500 dark:bg-yellow-600 md:dark:bg-transparent" aria-current="page">{{home}}</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-yellow-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-700 dark:hover:text-white md:dark:hover:bg-transparent">{{about}}</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-yellow-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-700 dark:hover:text-white md:dark:hover:bg-transparent">{{resume}}</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-yellow-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-700 dark:hover:text-white md:dark:hover:bg-transparent">{{skills}}</a>
        </li>
         <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-yellow-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-700 dark:hover:text-white md:dark:hover:bg-transparent">{{projects}}</a>
        </li>
         <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-yellow-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-yellow-700 dark:hover:text-white md:dark:hover:bg-transparent">{{contact}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>


<section class="w-full bg-black" >
  <div class="container mx-auto">

     <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
     :speed="1000"
    :modules="modules"
    @autoplayTimeLeft="onAutoplayTimeLeft"
    class="mySwiper"
  >
  <!-- slide 1 -->
    <swiper-slide>

       <div class="container mx-auto grid grid-cols-1 md:grid-cols-2">
      
      <!-- Left Column -->
      <div class="bg-black">
         <!-- Left content -->
     <div class="container mx-auto pt-10 md:pt-[15rem] pl-6" data-aos="fade-up">
        <NameHeading hello="Hello!" iam="I'm" name="Aiman Sajjad" developer="Frontend Web Developer"/>
      </div>
      </div>

      <!-- Right Column -->
      <div class="bg-black">
         <div class="container mx-auto">
       <ImageComponent :imgsrc="MainimageSrc" :className = "'rounded-lg w-full mx-auto'"/>
    </div>
      </div>

    </div>
    </swiper-slide>

    <!-- slide 2 -->
    <swiper-slide>
       <div class="container mx-auto grid grid-cols-1 md:grid-cols-2">
      
      <!-- Left Column -->
      <div class="bg-black">
         <!-- Left content -->
     <div class="container mx-auto pt-10 md:pt-[15rem] pl-6" data-aos="fade-up">
        <NameHeading hello="Hello, There!" iam="I'm" name="Web Designer" developer="Available for freelance work" connect="Let’s connect!"/>
      </div>
      </div>

      <!-- Right Column -->
      <div class="bg-black">
         <div class="container mx-auto">
       <ImageComponent :imgsrc="MainimageSrc" :className = "'rounded-lg w-full mx-auto'"/>
    </div>
      </div>

    </div>
    </swiper-slide>
 
    <template #container-end>
      <div class="autoplay-progress ">
        <svg class="stroke-yellow-500" viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>

  </div>
  

</section>

</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  --swiper-theme-color: #facc15;
}
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: yellow;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
 
}
</style>



