<script setup>
import { ref } from 'vue'
import PageHeading from './PageHeading.vue';

const skills = [
  { name: 'HTML5', percent: 100 },
  { name: 'CSS3', percent: 95 },
  { name: 'Bootstrap', percent: 100 },
  { name: 'Javascript', percent: 75 },
  { name: 'TailwindCSS', percent: 85 },
  { name: 'VueJS', percent: 70 },
  { name: 'AngularJS', percent: 70 },
  { name: 'Git', percent: 70 },
]

defineProps({
    
});
</script>

<template>
        <PageHeading fadedname="Skills" pagename="Skills"/>

        <section class=" w-full bg-black text-white ">

                  <div class="w-full text-center bg-black" data-aos="fade-up">
                <p class="text-gray-300 pb-7 italic text-lg">A powerful blend of creative vision and technical skill — 
                        turning ideas into functional, beautiful websites. These are the tools I trust to make that happen</p>
        </div>

          <div class="container mx-auto text-white " >

                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-10" >

                        <!-- Left Column -->
                         <div class="bg-black p-6 space-y-6" data-aos="fade-up">
                                <div v-for="(skill, index) in skills.slice(0, 4)" :key="index">

                                        <div class="flex justify-between mb-1">
                                                <span class="font-medium">{{ skill.name }}</span>
                                                <span>{{ skill.percent }}%</span>
                                          </div>

                                           <div class="w-full bg-neutral-800 rounded-full h-2.5">
                                                <div class="bg-yellow-500 h-2.5 rounded-full" :style="{ width: skill.percent + '%' }">
                                                </div>
                                           </div>
                                </div>

                         </div> <!-- Left Column -->

                          <!-- right Column -->
                         <div class="bg-black p-6 space-y-6" data-aos="fade-up">

                                <div v-for="(skill, index) in skills.slice(4, 8)" :key="'column2-' + index">

                                        <div class="flex justify-between mb-1">
                                                <span class="font-medium">{{ skill.name }}</span>
                                                <span>{{ skill.percent }}%</span>
                                          </div>

                                           <div class="w-full bg-neutral-800 rounded-full h-2.5">
                                                <div class="bg-yellow-500 h-2.5 rounded-full" :style="{ width: skill.percent + '%' }">
                                                </div>
                                           </div>
                                </div>

                         </div><!-- right Column -->
                </div>
                
        </div>

        </section>
 </template>