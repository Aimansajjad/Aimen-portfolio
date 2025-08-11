<script setup>
import { ref } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue';
import Aboutus from '../components/Aboutus.vue';
import Resume from '../components/Resume.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contactus from '../components/Contactus.vue';

import { onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'

// const sr = ScrollReveal({
//   origin: 'bottom',
//   distance: '40px',
//   duration: 800,
//   delay: 100,
//   opacity: 0,
//   reset: false,
//   easing: 'ease-in-out',
//   interval: 100,
//   viewFactor: 0.1
// });

// const handleNavClick = (sectionId) => {
//   const sectionElement = document.querySelector(`#${sectionId}`);
//   if (sectionElement) {
//     // Immediately reveal the section
//     sr.reveal(sectionElement.querySelectorAll('.reveal-up'), {
//       delay: 0,
//       duration: 600
//     });
//   }
// };

// Reference to track the target section
const targetSection = ref(null);

// ScrollReveal configuration
const sr = ScrollReveal({
   origin: 'bottom',
  distance: '50px', // mobile ke liye kam rakha
  duration: 700,
  delay: 100,
  opacity: 0,
  reset: false, // dobara repeat na ho — flicker kam hoga
  easing: 'ease-in-out',
  interval: 100,
  viewFactor: 0.2 // element ka 20% viewport me aayega to trigger
});

onMounted(() => {
  // Apply ScrollReveal to all elements with .reveal-up class
  sr.reveal('.reveal-up');

  // Listen to scroll-spy events to detect navigation link clicks
  window.addEventListener('scrollSpy:navigate', (event) => {
    const sectionId = event.detail.id; // Get the target section ID
    const sectionElement = sectionId ? document.querySelector(`#${sectionId}`) : null;

    if (sectionElement) {
      // Immediately reveal the section and its children with .reveal-up class
      sr.reveal(sectionElement.querySelectorAll('.reveal-up'), {
        delay: 0, // No delay for immediate animation
        duration: 600 // Slightly faster for instant feel
      });
    }
  });
});


</script>

<template>

      <div v-scroll-spy>
    <section id="home" >
      <HeaderComponent
        Home="Home"
        About="About"
        Resume="Resume"
        Skills="Skills"
        Projects="Projects"
        Contact="Contact"
      />
    </section>

    <section id="about">
      <Aboutus/>
    </section>

    <section id="resume">
      <Resume/>
    </section>

    <section id="skills">
      <Skills/>
    </section>

    <section id="projects">
      <Projects/>
    </section>

    <section id="contact">
      <Contactus/>
    </section>
  </div>


</template>

<style scoped>



</style>