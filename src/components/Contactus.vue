<script setup>
import { onMounted, nextTick } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PageHeading from './PageHeading.vue'

const currentYear = new Date().getFullYear()

onMounted(async () => {
  // Wait until DOM elements are fully rendered
  await nextTick()

  // Initialize AOS again (for this page)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    offset: 100,
    once: false, // false = scroll karne par har baar trigger hoga
  })

  // Ensure detection of all visible elements
  setTimeout(() => {
    AOS.refreshHard()
  }, 400)
});

</script>

<template>
    <PageHeading fadedname="Contact" pagename="Contact Me"/>

        <section class=" w-full bg-black pt-6">

             <div class="w-full text-center bg-black " data-aos="fade-up"  data-aos-delay="200">
                <p class="text-gray-300 pb-7 italic text-lg">
                    Have something in mind? I’m available for
                     freelance work, team projects, or creative discussions.
                </p>
        </div>

          <div class="container mx-auto" >

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 bg-black text-white text-center"  data-aos="fade-up"  data-aos-delay="200">
    <!-- Contact Number -->
    <!-- <div class="flex flex-col items-center">
      <div class="bg-gray-800 p-6 rounded-full mb-4">
        <PhoneIcon class="h-8 w-8 text-yellow-400" />
      </div>
      <h3 class="font-bold">CONTACT NUMBER</h3>
      <p>+92 344 5121118 / +92 314 5295554</p>
    </div> -->

    <!-- Website -->
    <div class="flex flex-col items-center">
      <div class="bg-gray-800 p-6 rounded-full mb-4">
        <!-- Globe SVG -->
         <svg class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
</svg>

        <!-- <svg class="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 0v20m10-10H2" />
        </svg> -->
      </div>
      <h3 class="font-bold">WEBSITE</h3>
      <a href="aimen-portfolio-bohj.vercel.app" target="_blank"><p>aimen-portfolio-bohj.vercel.app</p></a>
      
    </div>

   <!-- Email -->
    <div class="flex flex-col items-center">
      <div class="bg-gray-800 p-6 rounded-full mb-4">
        <!-- Paper Airplane SVG -->
        <svg class="h-8 w-8 text-yellow-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10l19-7-7 19-2.5-7L3 10z" />
        </svg>
      </div>
      <h3 class="font-bold">EMAIL ADDRESS</h3>
      <a href="mailto:aimansajjad200@gmail.com"> <p>aimansajjad200@gmail.com</p></a>
     
    </div>

    <!-- LinkedIn -->
    <div class="flex flex-col items-center ">
      <div class="bg-gray-800 p-6 rounded-full mb-4">
        <svg class="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </div>
      <h3 class="font-bold">LINKEDIN</h3>
      <a href="https://www.linkedin.com/in/aiman-sajjad-aa5544251/" target="_blank"><p>linkedin.com/in/aiman-sajjad</p></a>
      
    </div>

    <!-- GitHub -->
    <!-- <div class="flex flex-col items-center">
      <div class="bg-gray-800 p-6 rounded-full mb-4">
        <svg class="h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84v2.74c0 .26.18.58.69.48A10 10 0 0012 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h3 class="font-bold">GITHUB</h3>
      <p>github.com/yourname</p>
    </div> -->

  </div>
<hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700">

   <footer class="text-center py-4 text-lg text-white">
    Copyright ©{{ currentYear }} All rights reserved
  </footer>
            </div>




            </section>
</template>