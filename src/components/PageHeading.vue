<script setup>
import { ref } from 'vue'

defineProps({
    fadedname: String,
    pagename: String,  
});
</script>

<template>
  <section class="relative w-full pt-20 md:pt-40 pb-10 flex items-center justify-center bg-black overflow-hidden px-4 md:px-20" >
    
    <!-- Faded Background Text -->
    <h1 class="absolute text-[70px] md:text-[140px] font-extrabold text-white/10 select-none z-0 leading-none" data-aos="fade-up">
      {{fadedname}}
    </h1>

    <!-- Foreground Main Heading -->
    <h2 class="relative text-4xl md:text-7xl font-extrabold text-white z-10 text-center mt-4 md:mt-7" data-aos="fade-up">
      {{pagename}}
    </h2>    

  </section>
</template>


