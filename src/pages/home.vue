<script setup>
import { ref } from 'vue'
import HeaderComponent from '../components/HeaderComponent.vue';
import Aboutus from '../components/Aboutus.vue';
import Resume from '../components/Resume.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contactus from '../components/Contactus.vue';


defineProps({
   
});
</script>

<template>


  <HeaderComponent home="Home" about="About" resume="Resume" skills="Skills" projects="Projects" contact="Contact"></HeaderComponent>

  <Aboutus/>

  <Resume/>

  <Skills/>

  <Projects/>

  <Contactus/>

</template>

<style scoped>

</style>