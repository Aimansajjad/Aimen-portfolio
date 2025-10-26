<script setup>
import { ref, onMounted } from 'vue'
import PageHeading from './PageHeading.vue';
import AboutimageSrc from '../assets/image/ABOUTS.png'; // Image import
import ImageComponent from './ImageComponent.vue';

import { CountUp } from 'countup.js';
import ScrollReveal from 'scrollreveal';

const countEl = ref(null)
const aboutSection = ref(null)
let hasAnimated = false

onMounted(() => {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',   // zyada distance dene se motion smooth lagta hai
    duration: 1200,     // thoda longer duration for smoother reveal
    delay: 150,
    easing: 'ease-in-out', // natural motion
    opacity: 0,            // start hidden
    reset: false,          // scroll up-down pe repeat na ho (optional)
    viewFactor: 0.3        // 30% element visible hone par start (important!)
  });

  sr.reveal(aboutSection.value, {
    afterReveal: () => {
      if (!hasAnimated) {
        const counter = new CountUp(countEl.value, 30, {
          duration: 2,
          separator: ''
        });
        if (!counter.error) {
          counter.start();
          hasAnimated = true;
        } else {
          console.error(counter.error);
        }
      }
    }
  });
});

</script>

<template>
        <PageHeading fadedname="About" pagename="About Me"/>

        <section class=" w-full bg-black pt-6">

          <div class="container mx-auto" >

            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2" >
      
      <!-- Left Column -->
      <div class="bg-black pt-10 ">
        <ImageComponent :imgsrc="AboutimageSrc" :className= "'rounded-lg md:w-100 mx-auto reveal-up'"/>
        <!-- <img :src="AboutimageSrc" alt="about Image" class="rounded-lg w-100 mx-auto " /> -->
      </div>

      <!-- Right Column -->
      <div ref="aboutSection" class="bg-black p-6 reveal-up" >

        <div class="container mx-auto pt-2 md:pt-[2rem]" >
          <h2 class="text-3xl font-bold text-yellow-400">Frontend Web Developer.</h2>
           <p class="text-gray-300 mt-2 italic">
            I build responsive and interactive user interfaces using modern web technologies       
        </p>
        </div>

        <div class="flex gap-4">
          <!-- flex1 -->
          <div class="flex-initial text-white p-6 ">
             <div class="container mx-auto">
        <span class="font-semibold text-lg">Name:</span>
      </div>

             <div class="container mx-auto pt-3">
        <span class="font-semibold text-lg">Freelaunce:</span>
      </div>

             <div class="container mx-auto pt-3">
        <span class="font-semibold text-lg">Email:</span>
      </div>

             <div class="container mx-auto pt-3">
        <span class="font-semibold text-lg">LinkedIn:</span>
      </div>


        <!-- <div class="container mx-auto pt-3">
        <span class="font-semibold text-lg">Phone:</span>
      </div> -->


          </div>
<!-- flex2 -->
          <div class="flex-initial text-white p-6 ">

            <div class="container mx-auto">
        <span class=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">Aimen Sajjad</span>
      </div>

      <div class="container mx-auto pt-3">
        <span class=" text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">Available</span>
      </div>

      <div class="container mx-auto pt-3">
        <span class=" text-sm sm:text-base md:text-lg lg:text-xl">
           <a href="mailto:aimansajjad200@gmail.com" target="_blank" class="text-yellow-400 hover:underline truncate max-w-[60%]">
          aimansajjad200@gmail.com
        </a>
        </span>
      </div>

      <div class="container mx-auto pt-3">
        <span class=" text-sm sm:text-base md:text-lg lg:text-xl">
          <a href="https://www.linkedin.com/in/aiman-sajjad-aa5544251/" target="_blank" class="text-yellow-400 hover:underline truncate max-w-[60%]">
          linkedin.com/in/aiman-sajjad
        </a>
        </span>
      </div>

      <!-- <div class="container mx-auto pt-3">
        <span class=" text-lg">
          <a
    href="tel:03115980043"
    class="text-yellow-400 hover:underline" >
    03115980043
  </a>
        </span>
      </div> -->


          </div>

        </div>

        <div class="mt-4 pl-3 pt-4">
     <p class="text-white text-xl"> <span ref="countEl" class="text-yellow-400 font-bold"></span> Project complete</p>
    </div>
        
<div class="mt-4 pl-3">
      <button
       class="bg-yellow-400 text-black font-bold p-6 py-3 rounded-full border-2 border-transparent transition duration-300 uppercase text-sm tracking-wider hover:bg-transparent hover:text-white hover:border-white focus:outline-none"style="cursor: pointer;">      
    Download CV
      </button>
    </div>

    <!-- <a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
    Button Text
</a> -->
    
      </div>

    </div>

          </div>

        </section>



</template>

