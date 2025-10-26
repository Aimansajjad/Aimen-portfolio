<script setup>
import { ref } from 'vue'
import PageHeading from './PageHeading.vue';

defineProps({
  
});

</script>

<template>
        <PageHeading fadedname="Resume" pagename="Resume"/>

        <section class="bg-black w-full">

          
          <div class="w-full text-center bg-black" data-aos="fade-up">
                <p class="text-gray-300 pb-6 italic text-lg w-full max-w-screen-lg mx-auto px-4">
                  My resume highlights the skills, and experience I bring to 
                  every project — clear, focused, and ready for the next challenge
                </p>
        </div>

            <div class="container mx-auto ">

                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <!-- Left Column -->
      <div class="bg-black p-6 ">

        <div class="container mx-auto " data-aos="fade-up">
         <h2 class="text-3xl font-bold mb-4 text-yellow-400 ">Summary</h2>
         <br>

    <div class="relative pl-6 border-l-2 border-yellow-400 " >
      <div class="absolute -left-2 top-1 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full"></div>

      <h3 class="font-semibold uppercase text-gray-200 dark:text-gray-200 text-lg">AIMEN SAJJAD</h3>

      <p class="  text-gray-600 dark:text-gray-200 mt-1">
       Creative and deadline-oriented Frontend Web Developer with 2+ years of experience building
        user-friendly websites and web interfaces focused on usability and performance.
      </p>

      <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li> Hazro, District Attock</li>
          <li>aimansajjad200@gmail.com</li>
        </ul>
    </div>

    </div>

    <div class="container mx-auto pt-10" data-aos="fade-up">
         <h2 class="text-3xl font-bold mb-4 text-yellow-400 ">Education</h2>

    <div class="relative pl-6 border-l-2 border-yellow-400 ">
      <div class="absolute -left-2 top-1 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full"></div>

      <h3 class="font-semibold uppercase text-gray-200 dark:text-gray-200 text-lg">Bachelor of Computer Science</h3>
      <br>
      <p class=" text-lg text-yellow-400 mt-1 font-bold">
      2018 - 2022
      </p>

        <p class="italic text-base text-gray-600 dark:text-gray-400 mt-1 italic ">
      COMSATS UNIVERSITY ISLAMABAD, ATTOCK CAMPUS
      </p>

   

      <p class=" text-gray-600 dark:text-gray-200 mt-1 text-justify">
        Computer Science graduate with a strong foundation in programming, web technologies, and user interface 
        development. Specialized in frontend web development, with hands-on experience building responsive and 
        interactive web applications. Skilled in solving real-world problems and collaborating effectively in 
        team environments, with a passion for learning and growing in the tech industry
      </p>

    </div>

    </div>

      </div><!-- Left Column -->

      <!-- Right Column -->
      <div class="bg-black p-6">

         <div class="container mx-auto " data-aos="fade-up">

         <h2 class="text-3xl font-bold mb-4 text-yellow-400 ">Professional Experience</h2>
         <br>

    <div class="relative border-l-2 border-yellow-400 pl-6 space-y-10">
      <!-- Experience 1 -->
      <div class="relative">
        <div class="absolute -left-8 top-1 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full"></div>

        <h3 class="font-semibold uppercase text-gray-200 dark:text-gray-200 text-lg">Front-end web developer</h3>
      <br>
      <p class=" text-lg text-yellow-400 mt-1 font-bold">
      2022 - 2023
      </p>

        <p class="italic text-sm text-gray-600 dark:text-gray-400">Skylarks IT Solution, Kamra</p>

        <ul class="list-disc pl-5 mt-2  space-y-1 text-gray-700 dark:text-gray-300 ">
          <li>Proficient in HTML, CSS, JavaScript, Bootstrap, Vuejs, and AngularJS for dynamic web development.</li>
          <li>Developed custom-built web applications tailored to clients specific needs.</li>
          <li>Coded using HTML, CSS, Bootstrap and JavaScript to develop features for both mobile and desktop platforms.</li>
          <li>Applied SEO strategies, optimizing Meta Tags for improved website visibility.</li>
          <li>Utilized Git and Github for streamlined version control and collaborative coding.</li>
          <li>Developed 'MartCart,' a user-friendly website showcasing my skills in frontend development and online shopping experience design</li>
        </ul>
      </div>

      <!-- Experience 2 -->
      <div class="relative">
        <div class="absolute -left-8 top-1 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full"></div>

          <h3 class="font-semibold uppercase text-gray-200 dark:text-gray-200 text-lg">e-commerce sales specialist</h3>
      <br>
      <p class=" text-lg text-yellow-400 mt-1 font-bold">
      2023 - 2024
      </p>
        <p class="italic text-sm text-gray-600 dark:text-gray-400">Hyper Future Ecommerce (Pvt) Ltd., Islamabad</p>

        <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Amazon Seller Central management</li>
          <li> Product Listing and Listing Optimization</li>
          <li>Keyword research and SEO</li>
        </ul>
      </div>
    </div>
         </div>
        
      </div> <!-- Right Column -->

    </div>
            </div>
        </section>

</template>

